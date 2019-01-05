import axios from 'axios';

export const getDataUsers = () => {
  return dispatch => {
    dispatch(getDataUsersStarted());

    axios
      .get('./usersData.json')
        .then(res => {
          setTimeout(() => {
            dispatch(getDataUsersSuccess(res.data.users));
          }, 2500);
        })
        .catch(err => {
          dispatch(getDataUsersFailure(err.message));
        })
  }
}

const getDataUsersSuccess = (users) => ({
  type: 'GET_DATAUSERS_SUCCESS',
  payload: [
    ...users
  ]
})

const getDataUsersStarted = () => ({
  type: 'GET_DATAUSERS_STARTED'
})

const getDataUsersFailure =(error) => ({
  type: 'GET_DATAUSERS_FAILURE',
  payload: {
    error
  }
})