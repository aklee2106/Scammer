import React from 'react';
import {formatUploadTime} from '../../util/time_util';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';


class ConversationIndexItem extends React.Component {
  constructor (props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    // debugger
    e.preventDefault()
    if (this.props.currentUser.id === this.props.conversation.author_id){
      this.props.deleteConversation(this.props.conversation.id);
    } else {
      console.log('can only delete posts you created');
    }
  }

  render(){
    // debugger

    const buttons = this.props.currentUser.id === this.props.conversation.author_id?
      <div className="convo-index-item-buttons">
        <button><i className="fas fa-thumbs-up"></i> LIKE</button>
        <button className="reply-button"><i className="fas fa-reply"></i> REPLY</button>
        <button><i className="fas fa-share-alt"></i> SHARE</button>
        <button><i className="fas fa-edit"></i> EDIT</button>
        <button onClick={ this.handleDelete}> 
          <i className="fas fa-backspace"></i> DELETE
        </button>
      </div> :

      <div className="convo-index-item-buttons">
      <button><i className="fas fa-thumbs-up"></i> LIKE</button>
      <button className="reply-button"><i className="fas fa-reply"></i> REPLY</button>
      <button><i className="fas fa-share-alt"></i> SHARE</button>
      <button><i className="fas fa-edit"></i> EDIT</button>
      </div>


    return (
    <li className="newsfeed-convo-item-li">
      <div className="convo-item-div">
        <i className="fas fa-user-circle"></i>
        <div className="newsfeed-convo-item">
          <h3>
            {this.props.users[this.props.conversation.author_id].first_name} {this.props.users[this.props.conversation.author_id].last_name}
           <h4> - {formatUploadTime(this.props.conversation.created_at)}</h4>
          </h3>
          <p>{this.props.conversation.body}</p>
        </div>
      </div>
    
      {buttons}

      <CommentIndexContainer conversationId={this.props.conversation.id}/>
      
      <CommentFormContainer conversationId={this.props.conversation.id}/>
    
    </li>
    )
  }
}


export default ConversationIndexItem;