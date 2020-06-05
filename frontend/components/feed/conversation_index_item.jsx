import React from 'react';
import { Link } from 'react-router-dom';


const ConversationIndexItem = props => (
  <li className="newsfeed-convo-item">
    <h3>First Last- {props.conversation.created_at}</h3>
    {props.conversation.body}
  </li>
);

export default ConversationIndexItem;