import store from '../store';
import Types from '../Types';

import axios from 'axios';

const {dispatch} = store;

export function getLatestMovies(data) {
  return {
    type: Types.LATEST_MOVIES,
    payload: data,
  };
}

export function getTradingMovies(data) {
  return {
    type: Types.TRANDING_MOVIES,
    payload: data,
  };
}
