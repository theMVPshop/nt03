import { combineReducers } from 'redux';
import initState from './state';

//gets and saves user info
const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.value;
    default:
      return state;
  }
};
const signInStatus = (state = false, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return true;
    case 'SIGN_OUT':
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  signInStatus,
});
