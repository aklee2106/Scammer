import * as ConversationApiUtil from '../util/conversation_api_util';

export const RECEIVE_ALL_CONVERSATIONS = 'RECEIVE_ALL_CONVERSATIONS'; 
export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION';
export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION';

const receiveAllConversations = conversations = ({
  type: RECEIVE_ALL_CONVERSATIONS,
  conversations
})

const receiveConversation = conversation = ({
  type: RECEIVE_CONVERSATION, 
  conversation
})

const removeConversation = conversationId = ({
  type: REMOVE_CONVERSATION,
  conversationId
})

export const fetchConversations = () => (dispatch) => (
  ConversationAPIUtil.fetchConversations()
    .then(conversations=> dispatch(receiveAllConversations(conversations)))
)

export const fetchConversation = (conversationId) => (dispatch) => (
  ConversationAPIUtil.fetchConversation(conversationId)
    .then(conversation => dispatch(receiveConversation(conversation)))
)

export const createConversation = (conversation) => (dispatch) => (
  ConversationAPIUtil.createConversation(conversation)
    .then(conversation => dispatch(receiveConversation(conversation)))
)

export const updateConversation = (conversation) => (dispatch) => (
  ConversationAPIUtil.updatePost(conversation)
    .then(conversation => dispatch(receiveConversation(conversation)))
)

export const deleteConversation = (conversationId) => (dispatch) => (
  ConversationAPIUtil.deleteConversation(conversationId)
    .then(conversation => dispatch(removeConversation(conversationId)))
)