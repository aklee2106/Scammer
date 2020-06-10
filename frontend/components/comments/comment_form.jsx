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
    const q = document.getElementById("q");
    const w = document.getElementById('w');

    if (q.style.display === "none") {
      q.style.display = "block";
      w.style.display = "none";
    } else {
      q.style.display = "none";
      w.style.display = "block";
    }
  }

  render(){

    return (
      <div id='t' className="comment-form-div">
        <i className="fas fa-user-circle"></i>
        <button id="q" onClick={this.toggle} className="button-as-link2">Write a reply</button>
        
        <form id="w" onSubmit={this.handleSubmit} className="comment-form">
      
          <textarea className="comment-textarea"
            value={this.state.body}
            onChange={this.update('body')}
            onBlur={this.toggle}
          />
          
          <input type='submit' value='Post' />

        </form>

      </div>
    )
  }
}

export default CommentForm;