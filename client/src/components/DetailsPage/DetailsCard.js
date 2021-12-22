import React from 'react'
import "../../styles/DetailsCard/DetailsCard.css";

const DetailsCard = ({data, type, genres }) => {
    return (
        <div 
        className="header"
        style={{
            backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path}")` 
        }}>
            <div className="sub">
                <div className="single_column">
                    <section className="original_header">
                        <div className="poster_wrapper">
                            <div className="image_content">
                                <img 
                                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
                                loading="lazy"
                                className="poster" />
                            </div>
                        </div>
                        <div className="header_poster_wrapper">
                            <section className="header_poster">
                                <div className="title">
                                    <h2 className="title">
                                    {data.title && data.release_date
                                    ? <a href={`/${type}/details/${data.id}`} className="title">{data.title} </a>
                                    : <a href={`/${type}/details/${data.id}`} className="title">{data.original_name} </a>
                                    }
                                    {data.release_date
                                    ?<span className="release_date">({data.release_date})</span>
                                    :<span className="release_date">({data.first_air_date})</span>}
                                    </h2>
                                    <div className="facts">
                                        {data.release_date
                                        ?<span className="release">{data.release_date}</span>
                                        :<span className="release">{data.first_air_date}</span>}
                                        <span className="genres">
                                            {genres.map(genre=>(
                                                <a key={genre.id} to={`/${type}/details/${data.id}`}>| {genre.name} </a>
                                            ))}
                                        </span>
                                        {data.runtime
                                        ? <span className="runtime">| {data.runtime} m</span>
                                        : <span className="runtime">| {data.episode_run_time} m</span>}
                                    </div>
                                </div>
                                <ul className="actions">
                                    <li className="chart">
                                        <div className="outer-ring">
                                            <div className="user-score-chart">
                                            <div className="percent">
                                            <span className="icon">{data.vote_average}</span>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="text">{`User\nScore`}</div>
                                    </li>
                                </ul>
                                <div className="header_info">
                                    <h3 className="tagline">{data.tagline}</h3>
                                    <h3 className="overview">Overview</h3>
                                    <div className="overview">
                                        <p className="overview">
                                            {data.overview}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        )
}

export default DetailsCard;
