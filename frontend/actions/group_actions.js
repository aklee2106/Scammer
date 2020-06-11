import * as GroupApiUtil from '../util/group_api_utl';

export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';


const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

const receiveGroups = (groups) => {
  return {
    type: RECEIVE_GROUPS,
    groups
  };
};



export const requestGroups = () => dispatch => {
  return GroupApiUtil.fetchGroups()
    .then(groups => dispatch(receiveGroups(groups)))
}; 

export const requestGroup = (groupId) => dispatch => {
  return GroupApiUtil.fetchGroup(groupId)
    .then(group => dispatch(receiveGroup(group)))
}; 




