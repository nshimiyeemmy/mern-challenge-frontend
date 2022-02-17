import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
} from '../constants/actionTypes';

// Create Redux action creators that return an action
export const getUsers = () => ({
  type: LOAD_USERS,
});

export const getUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const getUsersFailure = () => ({
  type: LOAD_USERS_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchUsers() {
  return async (dispatch) => {
    dispatch(getUsers());

    try {
      const response = await fetch('http://localhost:5000/api/users');
      const data = await response.json();

      dispatch(getUsersSuccess(data?.data));
    } catch (error) {
      dispatch(getUsersFailure());
    }
  };
}
