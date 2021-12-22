import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailsCard from './DetailsCard';

const DetailsPage = ({type}) => {

    const { id } = useParams();
    const [dataResults, setData] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
            fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
                .then(res => res.json())
                .then(data =>{
                    if(!data.errors){
                        setData(data);
                        setGenres(data.genres)
                    }
                    else{
                        setData([]);
                        setGenres([]);
                    }
                })

                console.log(dataResults);
    }, [id]);

    return (
        <section className="details_section">
            {dataResults
            ? (<DetailsCard
                 data={dataResults}
                 type={type}
                 genres={genres}
                />)
            : ( <div>Loading...</div> )}
        </section>
        )
}

export default DetailsPage
