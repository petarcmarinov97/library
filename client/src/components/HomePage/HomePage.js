import React from 'react'
import "../../styles/HomePage/HomePage.css";
import Trending from "./Trending";
import Search from './Search';

const HomePage = () => {
    return (
        <main>
            <Search />
            <Trending />
        </main>
    )
}

export default HomePage;
