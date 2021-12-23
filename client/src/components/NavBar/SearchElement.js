import React from 'react'
import "../../styles/SearchElement/SearchElement.css";

function SearchInput({data, type}) {

  return (
        <li className = "movie-li">
          <a className = "movie-a" href={`/${type}/details/${data.id}`}>
            <div className = "div-image-movie">
              <div className = "sub-div">
                <img className= "img" src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt="" />
              </div>
            </div>
            <div className = "div-text-movie">

              {data.title
              ? <div className = "title-movie">{data.title}</div>
              : <div className = "title-movie">{data.original_name}</div>
              }

              {data.release_date
              ? <div className = "year-movie">{data.release_date}</div>
              : <div className = "year-movie">{data.first_air_date}</div>
              }
            </div>
          </a>
        </li>
          )
}

export default SearchInput
