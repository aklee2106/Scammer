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
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <header className="login-header">
          <h1>Yammer</h1>
          <h4>English(US)</h4>
        </header>
        <main className="login-content">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2>Log In</h2>
            <br/>
            
            {/* Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()} */}

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
              <label>Password
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </label>
              <br/>
              <a href="https://www.yammer.com/forgotten_password/new">Forgot password?</a>
              <br/>
              <input id="remember_me" type="checkbox"/>
              <label for="remember_me" class="checkbox-label">Remember me</label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>

            <aside className="login-aside">
              <h4>Don't have an account?</h4>
              <Link to={'/signup'}>Sign Up</Link>
              <h4>Want to learn more?</h4>
              <a href="https://www.microsoft.com/en-US/microsoft-365/yammer/yammer-overview">
                See how Yammer helps you work better.</a>
            </aside>

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
