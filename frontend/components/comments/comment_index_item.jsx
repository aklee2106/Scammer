import React from 'react';
import {formatUploadTime} from '../../util/time_util';
import CommentIndexContainer from '../comments/comment_index_container';
import { render } from 'react-dom';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props);
    
  }

  render(){

    const {deleteComment, comment, currentUser, users} = this.props; 
    
    const buttons = this.props.currentUser.id === comment.user_id ? 
      <div className="convo-index-item-buttons">
        <button><i className="fas fa-thumbs-up"></i> LIKE</button>
        
        {/* <button className="reply-button" onClick={this.reply}>
          <i className="fas fa-reply"></i> REPLY
        </button> */}
        
        {/* <button><i className="fas fa-share-alt"></i> SHARE</button> */}
        <button><i className="fas fa-edit"></i> EDIT</button>
        <button onClick={()=> deleteComment(comment.id)}> <i className="fas fa-backspace"></i> DELETE</button>
      </div> : 

      <div className="convo-index-item-buttons">
        <button><i className="fas fa-thumbs-up"></i> LIKE</button>

        {/* <button className="reply-button" onClick={this.reply}>
          <i className="fas fa-reply"></i> REPLY
        </button> */}

        {/* <button><i className="fas fa-share-alt"></i> SHARE</button> */}
        {/* <button><i className="fas fa-edit"></i> EDIT</button> */}
      
      </div>

    return(
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
        
        {buttons}
      
      </li>
    )


  }
}

export default CommentIndexItem;