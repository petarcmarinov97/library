import React from 'react'
import "../../styles/CatalogCard/CatalogCard.css";

const CatalogCard = ({type, data}) => {
    return (
        <div key={data.id} id={data.id} className="catalog_card_style">
            <div className="image">
                <div className="wrapper">
                    <a className="image" href={`/${type}/details/${data.id}`}>
                        <img 
                        className="poster"
                        loading="lazy"
                        src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
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
                                    {data.vote_average}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="title">
                    {data.title
                    ? <a className="title" href={`/${type}/details/${data.id}`}>{data.title}</a>
                    : <a className="title" href={`/${type}/details/${data.id}`}>{data.name}</a>
                    }
                </h2>
                    {data.release_date
                    ? <p>{data.release_date}</p>
                    : <p>{data.first_air_date}</p>
                    }
            </div>
        </div>
    );
}

export default CatalogCard
