import React, { useState } from "react";
import "../../styles/NavBar/NavBar.css"
import { Link } from "react-router-dom";
import  SearchElement from "./SearchElement";

const Navbar = ({showMovies, setShow}) => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

    return (
        <header>
          <div className="content">
            <div className="sub_media">
                <div className="nav_wrapperLeft">
                  <Link className="title" to="/">Movies Library</Link>
                  <div className="dropdown">
                    <button className="dropbtn">Movies</button>
                    <div className="dropdown-content">
                      <a href="/movie/popular">Popular</a>
                      <a href="/movie/top-rated">Top Rated</a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button className="dropbtn">TV Shows</button>
                    <div className="dropdown-content">
                      <a href="/tv/popular">Popular</a>
                      <a href="/tv/top-rated">Top Rated</a>
                    </div>
                  </div>
                </div>
                <div className="input-wrapper">
                  <input
                    className="input-movies"
                    type="text"
                    placeholder="Search for a movie"
                    value={query}
                    onChange={onChange}
                  />

                  {results.length > 0 && query!=="" && showMovies===true && (
                    <div
                    className="div-search-menu"
                    >
                      <div>
                        <ul className="ul-menu">
                          {results.map((movie) => (
                            movie.poster_path && (movie.title || movie.name) && (movie.release_date || movie.first_air_date))&&
                            (
                                    <SearchElement key={movie.id} movie={movie} />
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="nav_wrapperRight">
                    <ul className="users">
                        <li>
                            <Link to="/favorites">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/">Logout</Link>
                        </li>
                    </ul>
                    <ul className="guests">
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>          
                    </ul>
                </div>
            </div>
          </div>
    </header>
    );
}
 
export default Navbar;