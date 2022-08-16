import {combineReducers} from 'redux';
import movieReducer from './MovieData';

const appReducer = combineReducers({
  movieReducer,
});

export default appReducer;
