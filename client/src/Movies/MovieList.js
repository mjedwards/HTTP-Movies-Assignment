import React, { useContext } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { MovieContext } from "./context/MovieContext";

const MovieList = () => {
  const { movieState } = useContext(MovieContext);

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/api/movies")
  //     .then(res => this.setState({ movies: res.data }))
  //     .catch(err => console.log(err.response));
  // }

  return (
    <div className='movie-list'>
      {movieState.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

export default MovieList;
