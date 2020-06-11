import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      user_id: this.props.userId,
      conversation_id: this.props.conversationId,
      textOpen: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: ''});
  }

  toggle(){
    
    if (this.state.textOpen === true) {
     
      this.setState({textOpen: false})
    } else {
      
      this.setState({textOpen: true})
    } 
     
  }

  render(){
   
    const showThis = this.state.textOpen ? 
    <form onSubmit={this.handleSubmit} className="comment-form">
      <textarea className="comment-textarea"
        value={this.state.body}
        onChange={this.update('body')}
        onBlur={this.toggle}
      />
      <input type='submit' value='Post' />
    </form> : 

    <button onClick={this.toggle} className="button-as-link2">Write a reply</button>

    
    return (
      <div className="comment-form-div">
        <i id='user-icon' className="fas fa-user-circle"></i>

        {showThis}
        
        
      </div>
    )
  }
}

export default CommentForm;