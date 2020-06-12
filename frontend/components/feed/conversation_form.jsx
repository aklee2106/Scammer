import React from 'react';

class ConversationForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.conversation;

    this.state = {
      body: '',
      author_id: props.author_id,
      group_id: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  
  componentDidMount(){
    this.setState( {group_id: this.props.groupId} );
  }

  componentDidUpdate(prevProps){
    // debugger
    if (this.props.group !== prevProps.group) {
      this.setState({group_id: this.props.group})
    }
    // debugger
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.action(this.state);
    // debugger
    this.setState({body: ''});
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  toggle(){
    const x = document.getElementById("x");
    const y = document.getElementById('y');

    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
  }

  render() {
    return (
      <div className="convo-form">

        <button id="x" onClick={this.toggle} className="button-as-link">What are you working on?</button>
        
        <form id="y"onSubmit={this.handleSubmit} className="feed-post-form">
     
          <textarea onBlur={this.toggle} className="form-text-area"
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
