import axios from 'axios';
import { LOGIN_USER } from './types';

export function userLoginRequest(data) {
  console.log(data);
  return dispatch => {
    axios.post('/api/version1/user/login', data).then(function(res){
      console.log(res);
      dispatch({ type: LOGIN_USER, payload: res.data });
    });
  };
}
