import React from 'react'; 
import { Link } from 'react-router-dom';

class Feed extends React.Component{

  render(){
    return (
      <div className="feed-container">
        <header className="feed-header-container">
          <nav className="feed-header-nav">
            <div className="left-div">
              <i className="fas fa-th"></i>
              <h3>Network Name</h3>
            </div>
            <div className="feed-header-nav-icons">
              <i className="fas fa-cog"></i>
              <i className="fas fa-question"></i>
              <div className="name-div">
                <h4>First Name, Last Name</h4>
                <i className="far fa-user-circle"></i>
              </div>
              
            </div>
          </nav>
        </header>

        <div className="feed-content">
          <aside className="feed-leftbar">

          </aside>

          <main className="feed-main">

          </main>

          <aside className="feed-rightbar">

          </aside>
        </div>

      </div>
    )
  }
}

export default Feed; 