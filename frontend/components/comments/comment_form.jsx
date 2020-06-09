import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      user_id: this.props.userId,
      conversation_id: this.props.conversationId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: ''});
  }

  render(){

    return (
      <div className="comment-form-div">

        <form onSubmit={this.handleSubmit} className="comment-form">
      
          <textarea className="comment-textarea"
            value={this.state.body}
            onChange={this.update('body')}
            placeholder="Write a reply"
          />
          
          <input type='submit' value='Post' />

        </form>

      </div>
    )
  }
}

export default CommentForm;