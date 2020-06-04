import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Feed from './feed';

const mSTP = state => ({
  // network: state.email.split('@')[-1].split('.')[0]
  user: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(Feed);