import { connect } from 'react-redux';
import { withRouter } from "react-router";
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';


const mapStateToProps = (state) => ({
  // conversationId: ownProps.conversationId,
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);