import { ADD_NEWSLETTER, CLEAR_NEWSLETTER } from '../types';

const user = (state = {}, action) => {
  switch(action.type) {
    case ADD_NEWSLETTER:
      return { ...state, ...action.payload}
    case CLEAR_NEWSLETTER:
      return { ...state, ...action.payload}
    default:
      return state;  
  }
}

export default user;