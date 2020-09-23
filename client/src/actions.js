// import { type } from "jquery";
// import { ADD_USER, DELETE_USER } from './constants';

// export const addUser = (user) => ({
//   type: ADD_USER,
//   payload: user,
// });

// export const deleteUser = (id) => ({
//   type: DELETE_USER,
//   payload: id,
// });

//importing LOGIN constants
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";
import axios from "axios";

//action: LOGIN_SUCCESS once backend call is successfull
const loginSuccess = (authObj) => ({
  type:    LOGIN_SUCCESS,
  isFetchingAuth: false,
  isAuthenticatedUser: true,
  payload: authObj,
});

//action: LOGIN_FAILURE if backend call is unsuccessful
const loginFailed = (error) => ({
  type:    LOGIN_FAILURE,
  isFetchingAuth: false,
  isAuthenticatedUser: false,
  payload: error,
});

//action: LOGIN_REQUEST  to backend REST api
export const loginAttempt = (creds) => {
  //function receives credentials
  return (dispatch, getState) => {
    //dispatch action to notify client 
    //of login request in progress
    dispatch({ 
        type: LOGIN_REQUEST, 
        isFetchingAuth: true, 
        isAuthenticatedUser: false 
      });
    //use axios to query REST api for login.
    axios
      .post("/api/auth/signin", creds)
      .then( (response) => {
        dispatch(loginSuccess(response));
      })
      .catch( (error) => {
        dispatch(loginFailed(error));
      });
  }
}
