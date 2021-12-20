import React, {useState} from 'react'
import "../styles/SearchElement/SearchElement.css";

function SearchInput({movie}) {

  return (
        <li className = "movie-li">
          <a className = "movie-a" href="">
            <div className = "div-image-movie">
              <div className = "sub-div">
                <img clasName= "img-movie" loading="lazy" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="" />
              </div>
            </div>
            <div className = "div-text-movie">
              <div className = "title-movie">{movie.title}</div>
              <div className = "year-movie">{movie.release_date}</div>
            </div>
          </a>
        </li>
          )
}

export default SearchInput
