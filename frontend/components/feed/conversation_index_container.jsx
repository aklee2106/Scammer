import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';
import { fetchConversations, deleteConversation } from '../../actions/conversation_actions';

/*
Export a container component for the `PostIndex` that maps an array of all posts  
from the store as a `posts` prop. Additionally, it should map in functions that
will dispatch `fetchPosts` and `deletePost` to the store as props of the same
name.
*/

const mapStateToProps = state => ({
  conversations: Object.values(state.entities.conversations).reverse()
});

const mapDispatchToProps = dispatch => ({
  fetchConversations: () => dispatch(fetchConversations()),
  deleteConversation: conversationId => dispatch(deleteConversation(conversationId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationIndex);