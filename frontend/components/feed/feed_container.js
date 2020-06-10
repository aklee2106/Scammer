import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Feed from './feed';
import { logout } from '../../actions/session_actions';
import {fetchUsers} from '../../actions/session_actions';
import { fetchConversations} from '../../actions/conversation_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id], 
  users: state.entities.users
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchConversations: ()=> dispatch(fetchConversations())
});

export default connect(mSTP, mDTP)(Feed);