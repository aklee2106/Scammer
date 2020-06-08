import React from 'react';
import { Link } from 'react-router-dom';
import {formatUploadTime} from '../../util/time_util';

class ConversationIndexItem extends React.Component {
  constructor (props){
    super(props);

  }

  render(){
    // debugger
    return (
    <li className="newsfeed-convo-item-li">
      <div className="convo-item-div">
        <i className="fas fa-user-circle"></i>
        <div className="newsfeed-convo-item">
          <h3>
            {this.props.conversation.author.first_name} {this.props.conversation.author.last_name}
           - {formatUploadTime(this.props.conversation.created_at)}
          </h3>
          <p>{this.props.conversation.body}</p>
        </div>
      </div>
    
      <div className="convo-index-item-buttons">
        <button><i className="fas fa-thumbs-up"></i> LIKE</button>
        
        <button className="reply-button" onClick={this.reply}>
          <i className="fas fa-reply"></i> REPLY
        </button>
        
        <button><i className="fas fa-share-alt"></i> SHARE</button>
        <button><i className="fas fa-edit"></i> EDIT</button>
      </div>

    </li>
    )
  }
}


export default ConversationIndexItem;