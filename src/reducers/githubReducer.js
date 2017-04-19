import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function (state = initialState.github, action) {
  switch (action.type) {
  case types.GET_GITHUB_USERS_SUCCESS:
    return Object.assign({}, state, {
      users: action.users
    });
  default:
    return state;
  }
}
