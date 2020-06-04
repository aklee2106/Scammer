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
              <h3>Network Name, id:{this.props.user.network_id}</h3>
            </div>
            <div className="feed-header-nav-icons">
              <i className="fas fa-cog"></i>
              <i className="fas fa-question"></i>
              <div className="name-div">
                <h4>{this.props.user.first_name} {this.props.user.last_name}</h4>
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
                <button>Update</button>
                <button>Question</button>
                <button>Poll</button>
                <button>Praise</button>
              </div>
              <form className="feed-post-form">
                <textarea name="form-text-area" cols="100" rows="10"></textarea>
                <input type="submit" value='Post'/>    
              </form>
            </div>

            <div className="newsfeed-container">
              <div className="newsfeed-tabs">
                <button>DISCOVERY</button>
                <button>ALL</button>
                <button>FOLLOWING</button>
              </div>

              <div className="newsfeed-posts">
                <ul>
                  <li>example post</li>
                  <li>example post</li>
                  <li>example post</li>
                  <li>example post</li>
                  <li>example post</li> 
                </ul>
              </div>
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