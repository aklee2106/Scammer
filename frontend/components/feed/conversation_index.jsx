import React from 'react';
import ConversationIndexItem from './conversation_index_item';
;


class ConversationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchConversations();
  }

  render() {
    const { conversations} = this.props;

    return (
      <div>
        <ul>
          {
            conversations.map(conversation => (
             <ConversationIndexItem conversation={conversation}
              key={conversation.id}
              authorId = {conversation.author_id}  
            />
            ))
          }
        </ul>
        
      </div>
    );
  }
}

export default ConversationIndex;