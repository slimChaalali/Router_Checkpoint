import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import MoviesArray from './Components/Movies';
import Filter from './Components/Filter/Filter';
import FilmDetails from './Components/Film/FilmDetails';
import { Route, Routes,useLocation } from "react-router-dom";

function App() {
  const [filteredMovies, setFilteredMovies] = useState(MoviesArray);
  const location = useLocation();

  return (

    <div className="App">
      {location.pathname==='/' &&
      <Filter movies={MoviesArray} setFilteredMovies={setFilteredMovies} /> 
}
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />}/>
        <Route path="/film/:title/:key" element={<FilmDetails movies={MoviesArray}/>}/>
      </Routes>
    </div>

  );
}

export default App;
