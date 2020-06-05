import React from 'react';

class ConversationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.conversation;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>git
     
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
          />

          <button type='submit' value={this.props.formType} />
        </form>
    </div>
    );
  }
}

export default ConversationForm;