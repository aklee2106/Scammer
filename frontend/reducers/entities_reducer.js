import {combineReducers} from 'redux';
import usersReducer from "./users_reducer";
import conversationsReducer from './conversations_reducer';


const entitiesReducer = combineReducers({
  users: usersReducer, 
  conversations: conversationsReducer
});

export default entitiesReducer;