import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './splash';
import {login} from '../../actions/session_actions';

const mSTP = state => ({
  user: {
    email: 'alex@microsoft.com',
    password: '1234567'
  }
}); 

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Splash);