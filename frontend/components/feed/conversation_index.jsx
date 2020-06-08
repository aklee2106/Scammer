import React from 'react';
import ConversationIndexItem from './conversation_index_item';
;


class ConversationIndex extends React.Component {
  componentDidMount() {
    // debugger
    // this.props.fetchUsers();
    this.props.fetchConversations();
  }

  render() {
    // debugger
    const { conversations, users} = this.props;
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