import React, { useState } from "react";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors

    const API_KEY = "b463b193"; // Replace with your actual OMDB API Key

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.Response === "False") {
        throw new Error(data.Error);
      }

      setMovies(data.Search || []);
    } catch (error) {
      setMovies([]);
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-cente/r">MovieMania</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search For A Movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Search
        </button>
      </form>

      {error && <p className="text-danger text-center">{error}</p>}

      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-3" key={movie.imdbID}>
            <div className="card mb-4">
              <img
                src={movie.Poster}
                className="card-img-top"
                alt={movie.Title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
