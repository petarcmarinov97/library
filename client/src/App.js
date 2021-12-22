import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import { useState} from 'react';
import { Route, Routes } from "react-router";
import Catalog from './components/Catalog/Catalog';
import DetailsPage from './components/DetailsPage/DetailsPage';

function App() {

  const [showMovies, setShow] = useState(null);
  const showType = (e) =>
  {
    if(e.target.className !="ul-menu" && e.target.className !="input-movies"){
      setShow(false);
    }

    if(e.target.className =="input-movies"){
      setShow(true);
    }
  }

  return (
    <div onClick={showType}>
      <NavBar
      showMovies={showMovies}
      setShow={setShow}
      />
      <Routes>
        <Route exact path="/" element = {<HomePage/>} />
        <Route exact path="/movie/popular" element = {<Catalog type="movie" criteria="popular" pageTitle = "Popular Movies" />} />
        <Route exact path="/movie/top-rated" element = {<Catalog type="movie" criteria="top_rated" pageTitle = "Top Rated Movies" />} />
        <Route exact path="/tv/popular" element = {<Catalog type="tv" criteria="popular" pageTitle = "Popular TV Shows" />} />
        <Route exact path="/tv/top-rated" element = {<Catalog type="tv" criteria="top_rated" pageTitle = "Top Rated TV Shows" />} />
        <Route exact path="/movie/details/:id" element = {<DetailsPage type="movie" />} />
        <Route exact path="/tv/details/:id" element = {<DetailsPage type="tv" />} />
      </Routes>
    </div>
    )
}

export default App;