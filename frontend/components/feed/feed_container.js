import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Feed from './feed';
import { logout } from '../../actions/session_actions';
import {fetchUsers} from '../../actions/session_actions';
import { fetchConversations} from '../../actions/conversation_actions';
import {requestGroups} from '../../actions/group_actions';
import {requestLikes} from '../../actions/like_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id], 
  users: state.entities.users,
  groups: state.entities.groups
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchConversations: ()=> dispatch(fetchConversations()),
  requestGroups: ()=> dispatch(requestGroups()),
  fetchLikes: () => dispatch(requestLikes())
});

export default connect(mSTP, mDTP)(Feed);