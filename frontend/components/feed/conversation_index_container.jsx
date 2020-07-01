import { connect } from 'react-redux';
import ConversationIndex from './conversation_index';
import { fetchConversations, deleteConversation } from '../../actions/conversation_actions';
import {fetchUsers} from '../../actions/session_actions';



const mapStateToProps = state => ({
  conversations: Object.values(state.entities.conversations).reverse(),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  fetchConversations: () => dispatch(fetchConversations()),
  deleteConversation: conversationId => dispatch(deleteConversation(conversationId)),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationIndex);