export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const LOAD_SUCCESS = "LOAD_SUCCESS";

export const initialState = {
  movies: []
};

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        movies: action.payload
      };

    case EDIT_SUCCESS:
      return {
        ...state
      };

    case DELETE_SUCCESS:
      return { ...state };

    default:
      return state;
  }
};
