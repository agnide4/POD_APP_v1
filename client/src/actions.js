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
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_COURSES_SUCCESS, GET_COURSES_FAILURE, GET_COURSES_REQUEST, ADD_COURSES_FAILURE } from "./constants";
import { createSession } from "./utils/sessions";
import { ADD_COURSES_REQUEST, ADD_COURSES_SUCCESS } from "./constants"
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
      console.log("creds in action.js", creds);
    //use axios to query REST api for login.
    axios
      .post("/api/auth/signin", creds)
      .then( (response) => {
        //if request is successful, persist a session and dispatch
        //login success action
        if(response.status === 200){
          createSession(response.data);
          dispatch(loginSuccess(response.data));
        }
      })
      .catch( (error) => {
        dispatch(loginFailed(error.message));
      });
  }
}

//action to display courses//This function maybe used for both the student and instructor portal
        //When Request from API is successful
        const getCourseSuccess = (courses) => ({
          type: GET_COURSES_SUCCESS,
          payload: courses
        })
        //When Request from API fails
        const getCourseFailure = (error) => ({
          type: GET_COURSES_FAILURE,
          payload: error,
        })
        //courses Api request for instructor
        export const getCourses = (token) => {
          console.log(token)
          return (dispatch, getState) => {
            dispatch({type: GET_COURSES_REQUEST});
            axios
              .get("/api/user/instructor/courses", {
                headers: {
                  'x-access-token': token
                }
              })
              .then((response) => {
                dispatch(getCourseSuccess(response.data))
              })
              .catch((error) => {
                dispatch(getCourseFailure(error.message))
              })
          }
        }
        //Get Courses Student API request
        export const getStuCourses = () => {
          return (dispatch, getState) => {
            dispatch({type: GET_COURSES_REQUEST});
            axios
              .get("/api/user/student/courses")
              .then((response) => {
                dispatch(getCourseSuccess(response.data))
                console.log(response.data)
              })
              .catch((error) => {
                dispatch(getCourseFailure(error.message))
              })
          }
        }

//Action to add courses only available to instructor route
const addCourseSuccess = (course) => ({
  type: ADD_COURSES_SUCCESS,
  payload: course,
});
const addCourseError = (error) => ({ type: ADD_COURSES_FAILURE, payload: error });

export const addCourses = (course) => {
  console.log(course);
  return (dispatch, getState) => {
    dispatch({ type: ADD_COURSES_REQUEST });
    axios
      .post("/api/user/instructor/courses", course, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        dispatch(addCourseSuccess({...course, id: response.data.id }));
      })
      .catch((error) => {
        dispatch(addCourseError(error.message));
      });
  };
};
   