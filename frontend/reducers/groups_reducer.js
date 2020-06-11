import {RECEIVE_GROUP, RECEIVE_GROUPS} from '../actions/group_actions'; 

const groupsReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_GROUPS: 
      return action.groups;
    case RECEIVE_GROUP: 
      return Object.assign(nextState, action.group);
    default: 
      return state;
  }
}

export default groupsReducer; 