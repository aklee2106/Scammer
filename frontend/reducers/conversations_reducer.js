import {
  RECEIVE_ALL_CONVERSATIONS, 
  RECEIVE_CONVERSATION,
  REMOVE_CONVERSATION
} from '../actions/conversation_actions';

const ConversationsReducer = (state={}, action) =>{
  let newState = {}; 
  switch (action.type){
    case RECEIVE_ALL_CONVERSATIONS: 
      return action.conversations
    case RECEIVE_CONVERSATION: 
      Object.assign(newState, state, {[action.conversation.id]: action.conversation})
      return newState; 
    case REMOVE_CONVERSATION: 
      newState = Object.assign({}, state)
      delete newState[action.conversationId];  
      return newState; 
    default: 
      return state; 
    end 
  }
}

export default ConversationsReducer; 