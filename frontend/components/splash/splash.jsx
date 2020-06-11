import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchUsers();
    this.props.requestGroups();
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
                 to="/login"><i className="fas fa-user"></i> Log In
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

        <section className="lower-section">
          <div className="outer-div">
            <div className="text-div">
              <h2>Know what's happening from day to day</h2>
              <p>Discover all the work that happens between the big announcements 
                and the success story. Connect your org's front-runners or top-level 
                leaders back at headquarters to see everyone's progress come together
              </p>
            </div>
            <img src={window.squares}></img>
          </div>

          <div className="outer-div">
            <img src={window.circles}></img>
            <div className="text-div">
              <h2>Spend less time crafting the perfect message.</h2>
              <p>Join meaningful discussions to move your work along faster. Get quick
                answers to your questions, and have productive, spontaneous conversations
                  with experts and creatives across your org.
              </p>
            </div>
            

          </div>

          <div className="outer-div">
            <div className="text-div">
              <h2>Build on the work of others.</h2>
              <p>Make sure you're not repeating work that's already been done. 
                Use the learnings or progress of others to accelerate your own productivity. 
                Collaborate in a community to share ideas and solve problems in half the time.
              </p>
              
            </div>
            <img src={window.more_squares}></img>
          </div>
         

        </section>
        
        <footer className="splash-footer">
          <span>an alex lee joint  <i className="fas fa-crow"></i></span>
          <ul className='footer-links'>
            <li><a href="https://www.github.com/aklee2106"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/aklee2106"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="https://angel.co/u/alexander-k-lee"><i className="fab fa-angellist"></i></a></li>
          </ul>
        </footer>

      </div>
    )
  }
}

export default Splash;