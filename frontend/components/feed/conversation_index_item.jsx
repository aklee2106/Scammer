import React from 'react';
import {formatUploadTime} from '../../util/time_util';
import CommentFormContainer from '../comments/comment_form_container';
import CommentIndexContainer from '../comments/comment_index_container';


class ConversationIndexItem extends React.Component {
  
  constructor (props){
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      conversation_id: this.props.conversation.id,
      likeButtonText: "LIKE",
      textOpen: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.toggle = this.toggle.bind(this);
  
  }

  componentDidMount(){
    const {conversation, likes, fetchLikes, currentUser} = this.props;

    fetchLikes();
    
    const filteredLikes = likes.filter(like=>(
      like.conversation_id === conversation.id
    ));

    filteredLikes.forEach(like=> {
      if (like.user_id === currentUser.id){
        this.setState({likeButtonText: "UNLIKE"});
      }
    });
  }

  handleDelete(e){
    e.preventDefault()
    if (this.props.currentUser.id === this.props.conversation.author_id){
      this.props.deleteConversation(this.props.conversation.id);
    } 
  }

  handleLike(e){
    e.preventDefault();
    
    const {likes, conversation, currentUser} = this.props; 

    const currentUserLike = likes.filter(like=>(
      like.conversation_id === conversation.id && like.user_id === currentUser.id
    ));
    // debugger

    if (this.state.likeButtonText === "LIKE"){
      this.props.createLike(this.state);
      this.setState({likeButtonText: 'UNLIKE'});
    } else {
      this.props.deleteLike(currentUserLike[0].id);
      this.setState({likeButtonText: 'LIKE'});
    }
  }

  toggle(){
    
    if (this.state.textOpen === true) {
      this.setState({textOpen: false})
    } else {
      this.setState({textOpen: true})
    } 
  }

  render(){


    const buttons = this.props.currentUser.id === this.props.conversation.author_id?
      <div className="convo-index-item-buttons">
        <button onClick={this.handleLike}><i className="fas fa-thumbs-up"></i> {this.state.likeButtonText}</button>
        <button onClick={this.toggle} className="reply-button"><i className="fas fa-reply"></i> REPLY</button>
        {/* <button><i className="fas fa-share-alt"></i> SHARE</button> */}
        <button><i className="fas fa-edit"></i> EDIT</button>
        <button onClick={ this.handleDelete}> 
          <i className="fas fa-backspace"></i> DELETE
        </button>
      </div> :

      <div className="convo-index-item-buttons">
      <button onClick={this.handleLike}><i className="fas fa-thumbs-up"></i> {this.state.likeButtonText}</button>
      <button onClick={this.toggle} className="reply-button"><i className="fas fa-reply"></i> REPLY</button>
      {/* <button><i className="fas fa-share-alt"></i> SHARE</button> */}
      </div>
    
    const {conversation, likes, users, currentUser, currentGroup, groups} = this.props;
    
    const filteredLikes = likes.filter(like=>(
      like.conversation_id === conversation.id
    ));
    
    const likesOrLike = filteredLikes.length === 1 ? "like" : "likes"; 

    const likers = filteredLikes.length ===0 ? 
      null : 
      <div className="likes-div" >
        {filteredLikes.length}
        <span> {likesOrLike}</span>
      </div>; 
    
    const groupName = conversation.group_id ? 
      groups[conversation.group_id].name : "All Company" ;
    
    return (
    <li className="newsfeed-convo-item-li">
      <h5><i className="fas fa-users"></i> {groupName}</h5>
      <div className="convo-item-div">
        <i className="fas fa-user-circle"></i>
        <div className="newsfeed-convo-item">
          <h3>
            {this.props.users[this.props.conversation.author_id].first_name} {this.props.users[this.props.conversation.author_id].last_name}
           <h4> - {formatUploadTime(this.props.conversation.created_at)}</h4>
          </h3>
          <p>{this.props.conversation.body}</p>
        </div>
      </div>
  
      {buttons}
      {likers}
    
      <CommentIndexContainer conversationId={this.props.conversation.id}/>
      
      <CommentFormContainer 
        conversationId={this.props.conversation.id}
        textOpen={this.state.textOpen}
      />
    
    </li>
    )
  }
}


export default ConversationIndexItem;