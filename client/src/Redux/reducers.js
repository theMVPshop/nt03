import { combineReducers } from 'redux';
import initState from './state';

//gets and saves user info
const user = (state = {}, action) => {
  switch (action.type) {
    case 'GET_USER':
      let username = action.value;
      return username;
    default:
      return state;
  }
};

export default combineReducers({
  user,
});
