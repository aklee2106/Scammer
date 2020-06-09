import {connect, useStore} from 'react-redux';
import CommentIndex from './comment_index';
import {requestComments} from '../../actions/comment_actions'; 
import { fetchConversations, deleteConversation } from '../../actions/conversation_actions';

const mSTP = state => ({
  comments: Object.values(state.entities.comments), 
  conversations: Object.values(state.entities.conversations).reverse(),
  users: state.entities.users
});

const mDTP = dispatch => ({
  requestComments: () => dispatch(requestComments()), 
  fetchConversations: () => dispatch(fetchConversations()),
});

export default connect(mSTP, mDTP)(CommentIndex);