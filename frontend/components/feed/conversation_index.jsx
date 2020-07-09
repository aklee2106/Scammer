import React from 'react';
import ConversationIndexItem from './conversation_index_item';
import CommentFormContainer from '../comments/comment_form_container';


class ConversationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchConversations();
    this.props.fetchUsers();
    this.props.fetchLikes();
  }

  render() {
  
    const { conversations, users, currentGroup, currentUser, likes, groups} = this.props;

    if (Object.values(users).length <2 ){
      return null;
    }

    const filteredConversations = currentGroup ? 
      
      conversations.filter(convo=>(
        convo.group_id === currentGroup.id
      )) : 
      conversations

    return (
      <div>
        <ul>
          {
            filteredConversations.map(conversation => (
             <ConversationIndexItem conversation={conversation}
              key={conversation.id}
              users={users}
              currentUser = {currentUser}
              deleteConversation={this.props.deleteConversation}
              likes = {likes}
              groups = {groups}
              createLike = {this.props.createLike}
              deleteLike = {this.props.deleteLike}
              fetchLikes = {this.props.fetchLikes}
            />
            ))
          }
          
        </ul>
        
      </div>
    );
  }
}

export default ConversationIndex;