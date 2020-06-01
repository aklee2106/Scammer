$.ajax({
  method: 'POST', 
  url: '/api/users',
  data: {user: {
    email: 'alex@work.com',
    password: 'hunter12'
  }}
}) 

$.ajax({
  method: 'POST', 
  url: '/api/session',
  data: {user: {
    email: 'alex@work.com',
    password: 'hunter12'
  }}
}) 

$.ajax({
  method: "DELETE",
  url: "/api/session",
}) 

