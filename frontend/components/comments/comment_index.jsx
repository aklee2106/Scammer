import React from 'react';
import {formatUploadTime} from '../../util/time_util';
import CommentFormContainer from '../comments/comment_form_container';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestComments();
    this.props.fetchConversations();
  }

  render(){
    
    const {users, comments, conversationId} = this.props; 

    const filteredComments = comments.filter(comment => (
      comment.conversation_id === conversationId
    )); 
      
    if (comments.length === 0) return null;
    
    return (
      <div className="comment-index-div">
        <ul className="comment-index-ul">
          {
            filteredComments.map(comment => (
              <li className="comment-li" key={comment.id}>
                <div className="convo-item-div">
                  <i id="user-icon" className="fas fa-user-circle"></i>
                  <div className="comment-name-body">
                    <h3>
                      {users[comment.user_id].first_name} {users[comment.user_id].last_name}
                      <h4>- {formatUploadTime(comment.created_at)}</h4>
                    </h3>
                    <p>{comment.body}</p>
                  </div>
                </div>
                
                <div className="convo-index-item-buttons">
                  <button><i className="fas fa-thumbs-up"></i> LIKE</button>
                  
                  <button className="reply-button" onClick={this.reply}>
                    <i className="fas fa-reply"></i> REPLY
                  </button>
                  
                  <button><i className="fas fa-share-alt"></i> SHARE</button>
                  <button><i className="fas fa-edit"></i> EDIT</button>
                  <button onClick={()=> this.props.deleteComment(comment.id)}> <i className="fas fa-backspace"></i> DELETE</button>
                </div>

              </li>
            ))
          }
    
        </ul>
      </div>
    )
  }
}


export default CommentIndex; 