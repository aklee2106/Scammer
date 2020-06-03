import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render (){
    return (
      <div className="splash-container">
        <header className="splash-header">
          <nav className="splash-nav">
            <img src= {window.logo2}/>

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
              <button className="splash-button">Buy Office 365</button>
              <button className="splash-button" id="log-in"><i class="fas fa-user"></i> Log In</button>

              
              <Link className="splash-button" id="log-in"
                 to="/login"><i class="fas fa-user"></i> Log In</Link>
  
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