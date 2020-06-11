export const fetchGroups = () => (
  $.ajax({
    url: '/api/groups'
  }) 
); 

export const fetchGroup = groupId => (
  $.ajax({
    url: `/api/groups/${groupId}`
  })
); 