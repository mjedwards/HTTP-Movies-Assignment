import axios from "axios";
import {
  LOAD_SUCCESS,
  EDIT_SUCCESS,
  DELETE_SUCCESS
} from "../reducer/MovieReducer";

const baseURL = "http://localhost:5000";

export const api = () => {
  return axios.create({
    baseURL: baseURL
  });
};

export const getMovies = dispatch => {
  api()
    .get("/api/movies")
    .then(res => {
      console.log("axios GET /api/movies response:");
      console.log(res.data);

      dispatch({ type: LOAD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const editMovie = (newMovie, id, movieState, dispatch) => {
  console.log(id);
  api()
    .put(`/api/movies/${id}`, newMovie)
    .then(res => {
      console.log(`api/movies/${id} response:`);
      console.log(res);

      const updatedMovie = { ...newMovie, id: id };
      const updatedIndex = movieState.movie.findIndex(item => item.id === id);
      const frontMovieList = movieState.movie.slice(0, updatedIndex);
      const backMovieList = movieState.movie.slice(updatedIndex + 1);
      const newMovieList = frontMovieList
        .concat([updatedMovie])
        .concat(backMovieList);

      dispatch({ type: EDIT_SUCCESS, payload: newMovieList });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteMovie = (id, movieState, dispatch) => {
  api()
    .delete(`/api/movies/${id}`)
    .then(res => {
      console.log(
        `axios DELETE http://localhost:5000/api/movies/${id} response:`
      );
      console.log(res);

      // the response is just a success message; we need to adjust the state ourselves
      const newMovieList = movieState.friendList.filter(item => item.id !== id);

      dispatch({ type: DELETE_SUCCESS, payload: newMovieList });
    })
    .catch(err => {
      console.log(err);
    });
};
