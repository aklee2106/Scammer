import React from 'react';
import {connect, useStore} from 'react-redux';
import GroupsShow from './groups_show';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import {fetchUsers} from '../../actions/session_actions';
import { fetchConversations} from '../../actions/conversation_actions';
import {requestGroups} from '../../actions/group_actions';

const mSTP = (state, ownProps) => {
  return {
    groups: state.entities.groups, 
    currentGroup: state.entities.groups[ownProps.match.params.groupId],
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id], 
    conversations: Object.values(state.entities.conversations).reverse(),
  }
 
}; 

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchConversations: ()=> dispatch(fetchConversations()),
  requestGroups: ()=> dispatch(requestGroups())
});

export default connect(mSTP, mDTP)(GroupsShow);