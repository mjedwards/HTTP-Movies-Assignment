import React, { useState, useContext } from "react";
import { MovieContext } from "./context/MovieContext";
import { editMovie } from "./util/Api";

const EditMovie = props => {
  const { movieState, dispatch } = useContext(MovieContext);
  const [msg, setMsg] = useState("");

  const id = Number.parseInt(props.match.params.id);
  const oldmovieState = movieState.movies.find(item => item.id === id);

  const [data, setData] = useState({
    title: oldmovieState ? oldmovieState.title : "",
    director: oldmovieState ? oldmovieState.director : "",
    metascore: oldmovieState ? oldmovieState.metascore : ""
  });
  //   console.log(oldmovieState);
  //   console.log(data);

  const onsubmit = e => {
    e.preventDefault();
    if (!(data.title && data.director)) {
      return setMsg("Fill in Title and Director");
    } else {
      console.log(data);
      editMovie(data, id, movieState, dispatch);
    }
  };

  const onchange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <label>
          <h4>Title:</h4>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={data.title}
            onChange={onchange}
          />
        </label>
        <label>
          <h4>Director:</h4>
          <input
            type='text'
            name='director'
            placeholder='Director'
            value={data.director}
            onChange={onchange}
          />
        </label>
        <label>
          <h4>Metascore:</h4>
          <input
            type='text'
            name='metascore'
            placeholder='Metascore'
            value={data.metascore}
            onChange={onchange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EditMovie;
