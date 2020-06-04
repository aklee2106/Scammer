import React from 'react';
import {Link} from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

 
  renderErrors() {
    
    if (this.props.errors !== []){
      setTimeout(this.props.clearErrors, 10000);
      return(
        <div className="errors-modal">
          {this.props.errors.map((error, i) => (    
            <h2><i className="fas fa-exclamation-triangle"></i>{error}</h2>
          ))}
        </div>
      );
    } else {
      return null;
    }
    
  }

  render() {
    let formItem; 
    let asideItem;

    if (this.props.formType === "Log In") {formItem = (
      <div className="login-form">
        <br/>
        <label className='form-label'>Email Address
          <br/>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            id="email-button"
          />
        </label>
        <br/>
        <label className='form-label'>Password
          <br/>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
          />
        </label>
        <br/>
        <a className="form-a" href="https://www.yammer.com/forgotten_password/new">Forgot password?</a>

        <div className="form-bottom">
          <input id="remember_me" type="checkbox"/>
          <label for="remember_me" className="checkbox-label">Remember me</label>
          <br/>
          <input className="session-submit" type="submit" value={this.props.formType} />
        </div>
      </div>) 
    } else {formItem = (
      <div className="login-form">
        <br/>
        <label>Email Address
          <br/>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </label>
        <br/>
       <h4>Networks are private: a valid company email is required</h4>
        <input className="session-submit" type="submit" value={this.props.formType} />
      </div>) 
    }

    if (this.props.formType==="Log In"){
      asideItem= (
        <div className="login-aside">
          <h4>Don't have an account?</h4>
          <Link className="aside-links" to={'/signup'}>Sign Up</Link>
          <h4>Want to learn more?</h4>
          <a className="aside-links" href="https://www.microsoft.com/en-US/microsoft-365/yammer/yammer-overview">
            See how Yammer helps you work better.</a>
        </div>
      )
     } else {
       asideItem = (
        <div className="login-aside">
        <h4>Already have an account?</h4>
        <Link className="aside-links" to={'/login'}>Log In</Link>
        <h4>Want to learn more?</h4>
        <a className="aside-links" href="https://www.microsoft.com/en-US/microsoft-365/yammer/yammer-overview">
          See how Yammer helps you work better.</a>
        </div>
       )
      }

    return (
      <div className="login-form-container">
        {this.renderErrors()}
        <header className="login-header">
          <h1>Yabber</h1>
          <h4>English (US) <i className="fas fa-globe"></i></h4>
          
        </header>
        <main className="login-content">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2>{this.props.formType}</h2>          
            {formItem}
          </form>

          {asideItem}

        </main>


        <footer className="login-footer">
          <ul>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Apps</li>
            <li>Developers</li>
            <li>Jobs</li>
            <li>Blog</li>
            <li>Terms</li>
            <li>Privacy & Cookies</li>
            <li>Help</li>
          </ul>
          <h3>Microsoft</h3>
        
        </footer>
      
      </div>
    );
  }
}


export default SessionForm;
