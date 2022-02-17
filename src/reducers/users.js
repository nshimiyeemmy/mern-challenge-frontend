import {
  LOAD_USERS,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
} from '../constants/actionTypes';

export const initialState = {
  users: [],
  loading: false,
  hasErrors: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USERS_SUCCESS:
      return { users: action.payload, loading: false, hasErrors: false };
    case LOAD_USERS_FAILURE:
      return { ...state, loading: false, hasErrors: true };

    default:
      return state;
  }
};
