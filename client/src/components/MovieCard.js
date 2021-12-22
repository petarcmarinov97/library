import React from "react";
import "../styles/MovieCardHomePage/MovieCard.css";

const MovieCard = ({type, movie}) => {
    return (
        <div key={movie.id} id={movie.id} className="card_style">
            <div className="image">
                <div className="wrapper">
                    <a className="image" href={`/${type}/details/${movie.id}`}>
                        <img 
                        className="poster"
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt="poster" />
                    </a>
                </div>
            </div>
            <div className="content">
                <div className="consensus">
                    <div className="outer-ring">
                        <div className="user-score-chart">
                            <div className="percent">
                                <span className="icon">
                                    {movie.vote_average}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="title">
                    {movie.title
                    ? <a className="title" href={`/${type}/details/${movie.id}`}>{movie.title}</a>
                    : <a className="title" href={`/${type}/details/${movie.id}`}>{movie.name}</a>
                    }
                </h2>
                    {movie.release_date
                    ? <p>{movie.release_date}</p>
                    : <p>{movie.first_air_date}</p>
                    }
            </div>
        </div>
    );
}
 
export default MovieCard;