import React, { useState } from "react";
import "../styles/NavBar/NavBar.css"
import { Link } from "react-router-dom";
import SearchElement from "./SearchElement";

const Navbar = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5bc116c28a52c964a737db00d574daa7&language=en-US&page=1&include_adult=false&query=${query}`
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
                    <Link className="title" to="/">My Movie Collection</Link>
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Search for a movie"
                    value={query}
                    onChange={onChange}
                  />
                  {results.length > 0 && (
                    <div className="div-search-menu">
                      <div>
                        <ul className="ul-menu">
                          {results.map((movie) => (
                            <SearchElement key={movie.id} movie = {movie} />
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