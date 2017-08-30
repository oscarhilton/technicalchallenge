import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('./api/version1/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};
