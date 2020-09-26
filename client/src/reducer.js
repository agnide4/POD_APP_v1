import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./constants";
import { validateSession, getSessionAuthObj } from "./utils/sessions";
import { GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE } from "./constants"
import { ADD_COURSES_REQUEST, ADD_COURSES_SUCCESS, ADD_COURSES_FAILURE } from "./constants"

export const initialState = {
  isFetchingAuth: false,
  isAuthenticatedUser: validateSession(),
  authObj: getSessionAuthObj(),
  courses: [],
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { 
        ...state, 
        isFetchingAuth: action.isFetchingAuth, 
        isAuthenticatedUser: action.isAuthenticatedUser 
      };
    case LOGIN_SUCCESS:
      return { 
        ...state, 
        isFetchingAuth: action.isFetchingAuth, 
        isAuthenticatedUser: action.isAuthenticatedUser, 
        authObj: action.payload,
        error: ""
      };
    case LOGIN_FAILURE:
      return { 
        ...state, 
        isFetchingAuth: action.isFetchingAuth, 
        isAuthenticatedUser: action.isAuthenticatedUser, 
        authObj: {},
        error: action.payload
      };
    case GET_COURSES_REQUEST:
      return {...state, courses: [], error: null}
    case GET_COURSES_SUCCESS:
      return {...state, courses: action.payload, error: null}
    case GET_COURSES_FAILURE:
      return {...state, error: action.payload}

    case ADD_COURSES_REQUEST:
      return {...state, error: null}
    case ADD_COURSES_SUCCESS:
      return {...state, courses: state.courses.concat(action.payload), error: null}
    case ADD_COURSES_FAILURE:
      return {...state, error: action.payload}
      
    default:
      return state;
  }
};