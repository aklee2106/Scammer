import React from 'react';

class ConversationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.conversation;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.setState({author_id: this.props.conversation.author_id});
    this.props.action(this.state);
    this.setState({body: ''});
    // debugger;
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="feed-post-form">
     
          <textarea className="form-text-area"
            value={this.state.body}
            onChange={this.update('body')}
          />
         
          <input type='submit' value='Post' />

        </form>
    </div>
    );
  }
}

export default ConversationForm;
