import {combineReducers} from 'redux';
import usersReducer from "./users_reducer";
import conversationsReducer from './conversations_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer, 
  conversations: conversationsReducer, 
  comments: commentsReducer
});

export default entitiesReducer;