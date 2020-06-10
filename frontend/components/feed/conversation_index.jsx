import React from 'react';
import ConversationIndexItem from './conversation_index_item';
import CommentFormContainer from '../comments/comment_form_container';


class ConversationIndex extends React.Component {
  componentDidMount() {
    
    //so this will update global state. then because state updates, mSTP fires up again
    //and changes this component's local state? 
    this.props.fetchConversations();
    // this.props.fetchUsers();
  }

  render() {
    // debugger
    const { conversations, users} = this.props;

    //what happens if this were not here? First time it renders, error out? 
    if (Object.values(users).length <2 ){
      return null;
    }

    return (
      <div>
        <ul>
          {
            conversations.map(conversation => (
             <ConversationIndexItem conversation={conversation}
              key={conversation.id}
              users={users}
            />
            ))
          }
          
        </ul>
        
      </div>
    );
  }
}

export default ConversationIndex;