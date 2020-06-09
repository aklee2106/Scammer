import React from 'react';

class CommentIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestComments();
  }

  render(){
    
    const {comments, conversationId} = this.props; 
    const filteredComments = comments.map(comment => (
      comment.conversation_id === conversationId
    )); 

    return (
      <div>
        <ul>
          {
            filteredComments.map(comment => (
              <li key={comment.id}>
                <p>{comment.body}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}


export default CommentIndex; 