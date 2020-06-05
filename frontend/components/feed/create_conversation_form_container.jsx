import {connect} from 'react-redux';
import ConversationForm from './conversation_form';
import {createConversation} from '../../actions/conversation_actions';


const mapStateToProps = state => ({
  conversation: {
    body: ''
  },
  formType: 'Create Post'
});

const mapDispatchToProps = dispatch => ({
  action: conversation => dispatch(createConversation(conversation))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationForm);