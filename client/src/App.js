import React, { useState, useReducer, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import DeleteMovie from "./Movies/DeleteMovie";

import { getMovies } from "./Movies/util/Api";

import { MovieContext } from "./Movies/context/MovieContext";
import { MovieReducer, initialState } from "./Movies/reducer/MovieReducer";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieState, dispatch] = useReducer(MovieReducer, initialState);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  return (
    <MovieContext.Provider value={{ movieState, dispatch }}>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList} />
      <Route
        path='/movies/:id'
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path='/editmovie/:id' component={UpdateMovie} />
      <Route path='/deletemovie/:id' component={DeleteMovie} />
    </MovieContext.Provider>
  );
};

export default App;
