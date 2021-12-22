import React from 'react'
import "../../styles/TrendingHomePage/TrendingHomePage.css";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";

const Trending = () => {

    const type="movie";
    const [data, setData] = useState([]);
    const [trend, setTrend] = useState("day");

    const onClick = (e) =>{
        e.preventDefault();
        if(e.target.id == "left"){
            setTrend("day");
        }
        if(e.target.id == "right"){
            setTrend("week");
        }
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/${trend}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
            .then(res => res.json())
            .then(data =>{
                if(!data.errors){
                    setData(data.results);
                }else{
                    setData([]);
                }
            })
    }, [trend]);

     return (
        <section className="topTV-section">
            <div className="column_wrapper">
                <div onClick={onClick} className="content_wrapper">
                    <div className="column">
                        <div className="column_header">
                            <h2>Trending</h2>
                            <div className="selector_wrap">
                            <div className="selector">
                                <div className={trend=="day" ? "anchor_selected" : "anchor"}>
                                    <h3>
                                        <a href="#" id="left" className="no_click" data-panel="free_scroller" data-group="movie">Today <span className="glyphicons_v2 chevron-down"></span></a>
                                    </h3>
                                    <div className={trend=="day" ? "background" : ""}></div>
                                </div>

                                <div  className={trend=="week" ? "anchor_selected" : "anchor"}>
                                    <h3>
                                        <a id="right" href="#" className="no_click" data-panel="free_scroller" data-group="tv">This Week <span className="glyphicons_v2 chevron-down"></span></a>
                                    </h3>
                                    <div className={trend=="week" ? "background" : ""}></div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="results">
                            {data.length>0 && (
                            <div className="pageNumber">
                            {data.map(movie=> (
                            <MovieCard key={movie.id} type={type} movie={movie} />
                            ))}
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        
    );
}

export default Trending;
