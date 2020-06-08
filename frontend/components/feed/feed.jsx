import React from 'react'; 
import { Link } from 'react-router-dom';
import ConversationFormContainer from './create_conversation_form_container';
import ConversationIndexContainer from './conversation_index_container';

class Feed extends React.Component{
  componentDidMount(){
    this.props.fetchUsers();
  }

  render(){
    // debugger
    return (
      <div className="feed-container">
        
        <header className="feed-header-container">
          <nav className="feed-header-nav">
            <div className="left-div">
              <i className="fas fa-th"></i>
              <h3>Network Name, id:{this.props.currentUser.network_id}</h3>
            </div>

            <div className="feed-header-nav-icons">
              <div className='dropdown'>
                <i className="fas fa-cog"></i>
                <div className='dropdown-content'>
                  <h1>My Account</h1>
                  <div className="dropdown-signout-div">
                    <i className="far fa-user-circle"></i>
                    <div className="account-div">
                      <h4>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h4>
                      <h4>{this.props.currentUser.email}</h4>
                      <Link onClick={this.props.logout} to="/login">Log Out</Link>
                    </div>
                    
                    
                  </div>

                </div>
              </div>
            
              <i className="fas fa-question"></i>
              <div className="name-div">
                <h4>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h4>
                <i className="far fa-user-circle"></i>
              </div>
              
            </div>
          </nav>
        </header>

        <div className="feed-content">

          <aside className="groups-bar">
            <ul className="groups-ul">
              <li>Math Lovers</li>
              <li>Honor Society</li>
              <li>All Company</li>
            </ul>
            <button>Create a group</button>
            <button>Discover more groups</button>
          </aside>

          <div className="feed-main">

            <div className="feed-post-form-container">
              <div className="feed-main-icons">
                <button><i className="fas fa-comment-alt"></i> Update</button>
                <button><i className="fas fa-question-circle"></i> Question</button>
                <button><i className="fas fa-chart-bar"></i> Poll</button>
                <button><i className="fas fa-trophy"></i> Praise</button>
              </div>

              <ConversationFormContainer />
              
            </div>

            <div className="newsfeed-container">
              <ul className="newsfeed-tabs">
                <li>DISCOVERY</li>
                <li>ALL</li>
                <li>FOLLOWING</li>
              </ul>
              <i className="fas fa-cog"></i>

              <ConversationIndexContainer />

            </div>

          </div>

          <aside className="feed-rightbar">
            <div>
              <h4>INVITE YOUR COWORKERS</h4>
              <p>Yammer works best when your team is here too.</p>
              <button>Invite them now</button>
            </div>
            <div>
              <h4>SUGGESTED PEOPLE</h4>
              <div>Jesse Lin</div>
            </div>
            <div>
              <h4>SUGGESTED GROUPS</h4>
            </div>
          </aside>

        </div>
        

      </div>
    )
  }
}

export default Feed; 