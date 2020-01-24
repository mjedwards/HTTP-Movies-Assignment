import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { deleteMovie } from "../Movies/util/Api";
import { MovieContext } from "../Movies/context/MovieContext";

const DeleteMovie = props => {
  const { movieState, dispatch } = useContext(MovieContext);

  const id = Number.parseInt(props.match.params.id);
  const oldMovie = movieState.movies.find(item => item.id === id);

  if (!oldMovie) {
    return <Redirect to='/' />;
  }

  const handleCancel = e => {
    e.preventDefault();

    props.history.push("/");
  };

  const handleDelete = e => {
    e.preventDefault();

    deleteMovie(id, movieState, dispatch);

    props.history.push("/");
  };

  return (
    <div>
      <h3>Confirm Deletion:</h3>
      <div className='top-nine-item'>
        <p>{}</p>
        <p>{}</p>
        <p>{}</p>

        <div className='button-bar'>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
