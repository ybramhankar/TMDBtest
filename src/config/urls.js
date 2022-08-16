import {BASE_URL} from './config';

export const API_GET_POPULAR =
  BASE_URL + '/movie/popular?api_key={API_KEY}&language=en-US&page=1';

export const API_GET_LATEST =
  BASE_URL + '/movie/latest?api_key={API_KEY}&language=en-US&page=1';

export const API_GET_TRANDING =
  BASE_URL + '/trending/movie/week?api_key={API_KEY}&language=en-US&page=1';
