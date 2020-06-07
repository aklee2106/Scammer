import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './splash';
import {login} from '../../actions/session_actions';

const mSTP = state => ({
  demoUser: {
    email: 'jeff@amazon.com',
    password: 'hunter12'
  }
}); 

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Splash);