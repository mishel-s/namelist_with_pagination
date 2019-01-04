import {
  GET_DATAUSERS_SUCCESS,
  GET_DATAUSERS_FAILURE,
  GET_DATAUSERS_STARTED
} from '../../constants/actionTypes.js';

const initialState = {
  loading: false,
  dataUsers: [],
  error: null
};

export default function dataUsers(state = initialState, action) {
  switch(action.type) {
    case GET_DATAUSERS_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_DATAUSERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        dataUsers: action.payload
      };
    case GET_DATAUSERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state
  }
}