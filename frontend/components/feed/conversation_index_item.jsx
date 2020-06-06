import React from 'react';
import { Link } from 'react-router-dom';


const ConversationIndexItem = props => (
  <li className="newsfeed-convo-item-li">
    <div className="convo-item-div">
      <i className="fas fa-user-circle"></i>
      <div className="newsfeed-convo-item">
        <h3>First Last- {props.conversation.created_at}</h3>
        <p>{props.conversation.body}</p>
      </div>

    </div>
    
    <div className="convo-index-item-buttons">
      <button><i className="fas fa-thumbs-up"></i> LIKE</button>
      <button><i className="fas fa-reply"></i> REPLY</button>
      <button><i className="fas fa-share-alt"></i> SHARE</button>
      <button><i className="fas fa-edit"></i> EDIT</button>
    </div>
  </li>
  
);

export default ConversationIndexItem;