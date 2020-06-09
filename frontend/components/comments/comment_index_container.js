import {connect, useStore} from 'react-redux';
import CommentIndex from './comment_index';
import {requestComments} from '../../actions/comment_actions'; 

const mSTP = state => ({
  comments: Object.values(state.entities.comments)
});

const mDTP = dispatch => ({
  // fetchConversations: () => dispatch(fetchConversations()),
  requestComments: () => dispatch(requestComments())
});

export default connect(mSTP, mDTP)(CommentIndex);