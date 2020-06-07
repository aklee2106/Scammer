import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e){
    e.preventDefault();
    this.props.login(this.props.demoUser);    
  }

  render (){
    return (
      <div className="splash-container">
        <header className="splash-header">
          <nav className="splash-nav">

            <img className="splash-img" src= {window.logo}/>
            
            <ul>
              <li><a href="https://www.microsoft.com/en-us/microsoft-365/business/all-business">Microsoft 365</a></li>
              <li><a href="https://azure.microsoft.com/en-us/">Azure</a></li>
              <li><a href="https://www.microsoft.com/en-us/microsoft-365/business/all-business">Office 365</a></li>
              <li><a href="https://dynamics.microsoft.com/en-us/">Dynamics 365</a></li>
              <li><a href="https://www.microsoft.com/en-us/sql-server/">SQL</a></li>
              <li><a href="https://www.microsoft.com/en-us/microsoft-365/windows">Windows 10</a></li>
            </ul>
          </nav>
        </header>

        <main className="splash-content">
          <nav className="splash-content-nav">
            <h2>Yabber</h2>
            <div className="splash-button-div">
        

              <button onClick={this.demoLogin} className="splash-button">Demo</button>
              <Link className="splash-button" id="log-in"
                 to="/login"><i class="fas fa-user"></i> Log In
              </Link>
  
            </div>
          </nav>

          <div className="splash-content-div">
            <h1>Work Smarter, Work Together</h1>
            <p>Connect with people across your organization 
              to make better decisions, faster.
            </p>
          </div>
        </main>

      </div>
    )
  }
}

export default Splash;