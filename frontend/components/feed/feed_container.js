import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Feed from './feed';
import { logout } from '../../actions/session_actions';
import {fetchUsers} from '../../actions/session_actions';

const mSTP = state => ({
  // network: state.email.split('@')[-1].split('.')[0]
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mSTP, mDTP)(Feed);