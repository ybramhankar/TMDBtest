import Types from '../Types';

let intialState = {
  latestMovies: null,
  trandingMovies: null,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case Types.LATEST_MOVIES:
      return {
        ...state,
        latestMovies: action.payload,
      };
    case Types.TRANDING_MOVIES:
      return {
        ...state,
        trandingMovies: action.payload,
      };

    default:
      return state;
  }
}
