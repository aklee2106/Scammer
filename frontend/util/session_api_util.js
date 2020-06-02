export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);


export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);



// $.ajax({
//   method: 'POST', 
//   url: '/api/users',
//   data: {user: {
//     email: 'alex@work.com',
//     password: 'hunter12'
//   }}
// }) 

// $.ajax({
//   method: 'POST', 
//   url: '/api/session',
//   data: {user: {
//     email: 'alex@work.com',
//     password: 'hunter12'
//   }}
// }) 

// $.ajax({
//   method: "DELETE",
//   url: "/api/session",
// }) 

