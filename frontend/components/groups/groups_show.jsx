import React from 'react';
import { Link } from 'react-router-dom';
import ConversationFormContainer from '../feed/create_conversation_form_container';
import ConversationIndexContainer from '../feed/conversation_index_container';

class GroupsShow extends React.Component {
  
  componentDidMount(){
    this.props.fetchUsers();
    this.props.requestGroups(); 
  }
  render (){
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

          <div className="groups-show-content">
            <aside className="groups-bar">
              <div className="top-div">

                <div className="left-bar-icons">
                  <div className="left-icons">
                    <a href="#/home"><i className="fas fa-home"></i></a>
                    
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
                  <h5><Link to={`/groups/${this.props.groups[1].id}`}> {this.props.groups[1].name}</Link></h5>
                  <h5><Link to={`/groups/${this.props.groups[2].id}`}>{this.props.groups[2].name}</Link></h5>
                  <h5>All Company</h5>
                  <h5 id='blue'><i className="fas fa-plus"></i> Create a group</h5>
                  <h5 id='blue'><i className="fas fa-users"></i> Discover more groups</h5>
                </div>

              </div>
            </aside>

            <div className="groups-show-display">
      

              <div className="groups-main-bar">
                <i className="fas fa-users"></i>
                <h1>{this.props.currentGroup.name}</h1>
              </div>
              <div className="feed-main-icons">
                <button><i className="fas fa-comment-alt"></i> Update</button>
                <button><i className="fas fa-question-circle"></i> Question</button>
                <button><i className="fas fa-chart-bar"></i> Poll</button>
                <button><i className="fas fa-trophy"></i> Praise</button>
              </div>
              <ConversationFormContainer groupId={this.props.currentGroup.id}/>
              <ConversationIndexContainer currentGroup ={this.props.currentGroup}/>
            </div>

          
          </div>


      </div>
    )

  }
}

export default GroupsShow; 