import React from 'react'

const MovieList = ({movies}) => {

  return (
    <div className="movie-container">
        {movies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <p>{movie.Release_date}</p>
                <p>{movie.Overview}</p>
            </div>
        ))};

    </div>
  )
}

export default MovieList
