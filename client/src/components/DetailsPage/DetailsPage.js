import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailsCard from './DetailsCard';
import ActorsCard from "./ActorsCard";
import "../../styles/DetailsPage/DetailsPage.css";

const DetailsPage = ({type}) => {

    const { id } = useParams();
    const [dataResults, setData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [cast, setCast] = useState([]);
    let count = 0;

    useEffect(() => {
            fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&append_to_response=credits`)
                .then(res => res.json())
                .then(data =>{
                    if(!data.errors){
                        setData(data);
                        setGenres(data.genres);
                        setCast(data.credits.cast);
                    }
                    else{
                        setData([]);
                        setGenres([]);
                        setCast([]);
                    }
                })
            
    }, [id]);

    return (
        dataResults
        ?(
            <section>
            <div className="details_section">
            <DetailsCard data={dataResults} type={type} genres={genres}/>
            </div>
            <div className="cast">
                <div className="column_wrapper">
                    <div className="sub_column">
                        <div className="white_column">
                            <section className="panel">
                                {type === "tv"
                                ? <h3 className="cast_title">Series Cast</h3>
                                : <h3 className="cast_title">Movie Cast</h3>
                                }
                                <div className="scroller">
                                    <ol className="cast_people">
                                    {cast.length > 0 && 
                                    cast.map(actor => (
                                        <ActorsCard key={actor.id} actor={actor} />
                                    ))}
                                    </ol>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
        :( <div>Loading...</div> )
        
    )
}

export default DetailsPage
