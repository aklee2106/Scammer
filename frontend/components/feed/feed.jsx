import React from 'react'; 
import { Link } from 'react-router-dom';
import ConversationFormContainer from './create_conversation_form_container';
import ConversationIndexContainer from './conversation_index_container';

class Feed extends React.Component{

  componentDidMount(){
    this.props.fetchUsers();
    this.props.requestGroups(); 
  }

  render(){
    if (Object.values(this.props.users).length < 2) {
      return null; 
    }

    if (!Object.values(this.props.groups).length) {
      return null;
    }

    return (
      <div className="feed-container">
        
        <header className="feed-header-container">
          <nav className="feed-header-nav">
            <div className="left-div">
              <i className="fas fa-th"></i>
              <img className="amazon-logo" src={window.amazon} />
            </div>

            <div className="feed-header-nav-icons">
              <div className='dropdown'>
                <i className="fas fa-cog"></i>
                <div className='dropdown-content'>
                  <h1>My Account</h1>
                  <div className="dropdown-signout-div">
                    
                    <i className="fas fa-user-circle"></i>
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
                <i className="fas fa-user-circle"></i>
              </div>
              
            </div>
          </nav>
        </header>

        <div className="feed-content">

          <aside className="groups-bar">
            <div className="top-div">

              <div className="left-bar-icons">
                <div className="left-icons">
                  <i className="fas fa-home"></i>
                  <i className="fas fa-envelope"></i>
                  <i className="fas fa-bell"></i>
                </div>
                <i className="fas fa-cog"></i>
              </div>
              <div className="search-div">
                <i className="fas fa-search"></i>
                <input type="search" placeholder="Search" className="search-input"></input>
              </div>
              
              <div className='add-groups'>
        
                <h5>AMAZON GROUPS <i className="fas fa-plus"></i></h5>
                <h5><Link to={`/groups/${this.props.groups[6].id}`}> {this.props.groups[6].name}</Link></h5>
                <h5><Link to={`/groups/${this.props.groups[7].id}`}>{this.props.groups[7].name}</Link></h5>
                <h5>All Company</h5>

                <h5 id='blue'><i className="fas fa-plus"></i> Create a group</h5>
                <h5 id='blue'><i className="fas fa-users"></i> Discover more groups</h5>
              </div>

              
            </div>
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
              <div className="newsfeed-tabs">
                <li>DISCOVERY</li>
                <li>ALL</li>
                <li>FOLLOWING</li>
              </div>
              <i className="fas fa-cog"></i>

              <ConversationIndexContainer />

            </div>

          </div>

          <aside className="feed-rightbar">

            <div className='rightbar-top-div'>
              <h4>INVITE YOUR COWORKERS</h4>
              <div>
                <i className="fas fa-envelope-open-text"></i>
                <p>Yammer works best when your team is here too.</p>
              </div>
              <button>Invite them now</button>
            </div>


            <div className="suggested-people-div">
              <h4>SUGGESTED PEOPLE</h4>
              <div className='first-person'>
                <i className="fas fa-user-circle"></i>
                {/* <h5>{this.props.users[1].first_name} {this.props.users[1].last_name}</h5>   */}
                <h5>Jesse Lin</h5>  
              </div>
              <button>Follow</button>
              <div className='second-person'>
                <i className="fas fa-user-circle"></i>
                {/* <h5>{this.props.users[2].first_name} {this.props.users[2].last_name}</h5> */}
                <h5>Tiffany Chin</h5>

              </div>
                <button>Follow</button>
            </div>

            <div className="suggested-groups">
              <h4>SUGGESTED GROUPS</h4>

              <div className="first-group">
                <i className="fas fa-chart-line"></i>
                {/* <h5>{this.props.groups[1].name}</h5> */}
                <h5>CEO Corner</h5>
              </div>
                <button>Join</button>

              <div className="second-group">
                <i className="fas fa-chart-pie"></i>
                {/* <h5>{this.props.groups[2].name}</h5> */}
                <h5>Finance Team</h5>
              </div>
                <button>Join</button>

            </div>

          </aside>

        </div>
        

      </div>
    )
  }
}

export default Feed; 