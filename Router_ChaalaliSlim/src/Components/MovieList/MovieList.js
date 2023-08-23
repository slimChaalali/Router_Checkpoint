import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'


const MovieList = ({ movies }) => {
  return (
    <div className='cardd'>
      {movies.map((movie, key) =>
        <MovieCard moviees={movie} index={key} />
      )
      }
    </div>
  )
}

export default MovieList