import {
  RECEIVE_ALL_CONVERSATIONS, 
  RECEIVE_CONVERSATION,
  REMOVE_CONVERSATION
} from '../actions/conversation_actions';

const ConversationsReducer = (state={}, action) =>{
  let newState = {}; 
  switch (action.type){
    case RECEIVE_ALL_POSTS: 
      return action.posts
    case RECEIVE_POST: 
      Object.assign(newState, state, {[action.post.id]: action.post})
      return newState; 
    case REMOVE_POST: 
      newState = Object.assign({}, state)
      delete newState[action.postId];  
      return newState; 
    default: 
      return state; 
    end 
  }
}

export default ConversationsReducer; 