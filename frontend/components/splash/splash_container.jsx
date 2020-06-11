import { connect } from 'react-redux';
import React from 'react';
import Splash from './splash';
import {login} from '../../actions/session_actions';
import {fetchUsers} from '../../actions/session_actions';
import {requestGroups} from '../../actions/group_actions';

const mSTP = state => ({
  demoUser: {
    email: 'jeff@amazon.com',
    password: 'hunter12'
  }
}); 

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  fetchUsers: () => dispatch(fetchUsers()),
  requestGroups: () => dispatch(requestGroups())
});

export default connect(mSTP, mDTP)(Splash);