import axios from 'axios';
import {API_KEY, BASE_URL} from '../config/config';

export const configHeader = () => {
  return {
    'Content-Type': 'application/json',
  };
};
