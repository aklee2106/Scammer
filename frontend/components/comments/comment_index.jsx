import React from 'react';
import {formatUploadTime} from '../../util/time_util';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestComments();
    this.props.fetchConversations();
  }

  render(){
    
    const {users, comments, conversationId, currentUser} = this.props; 

    const filteredComments = comments.filter(comment => (
      comment.conversation_id === conversationId
    )); 
      
    if (comments.length === 0) return null;
  
    return (
      <div className="comment-index-div">
        <ul className="comment-index-ul">
          {
            filteredComments.map(comment => (
              
              <CommentIndexItem comment={comment}
                key={comment.id}
                currentUser = {currentUser}
                deleteComment = {this.props.deleteComment}
                users = {users}
              /> 
      
            ))
          }
    
        </ul>
      </div>
    )
  }
}


export default CommentIndex; 