import React from 'react'
import "../../styles/Search/Search.css";

const Search = () => {
    return (
        <section className="search">
            <div className="media">
                <div className="column_wrapper">
                    <div className="content_wrapper">
                        <div className="title">
                            <h2>Welcome</h2>
                            <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                        </div>
                        <div className="search">
                            <form dir="auto" action="/search" method="get" className="inner_search_form">
                                <label className="input_label">
                                    <input
                                    type="text" name="query"
                                    className="inputSearch"
                                    placeholder="Search for a movie, tv show, person......"
                                    />
                                </label>
                                <input type="submit" value="Search"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search
