import {RECEIVE_CURRENT_USER, RECEIVE_USERS} from '../actions/session_actions';
import {RECEIVE_ALL_CONVERSATIONS} from '../actions/conversation_actions';
const usersReducer = (state={}, action) => {
  
  const newState = Object.assign({}, state); 
  switch (action.type){
    case RECEIVE_CURRENT_USER: 
      newState[action.currentUser.id] = action.currentUser;   
      return newState;
    case RECEIVE_ALL_CONVERSATIONS: 
      return action.users;
    default: 
      return state; 
  }
};


export default usersReducer; 