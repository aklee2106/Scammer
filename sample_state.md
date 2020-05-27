{
  entities: {
    posts: {
      1: {
        id: 1,
        body: "Do we get Memorial Day off?",
        author_id: 2,
        parent_post_id: null,
        group_id: 4
      },
      190: {
        id: 190,
        body: "Hey all, here are the project specs for the new product launch targeting gen z shoppers.",
        author_id: 25,
        parent_post_id: null,
        group_id: 3
      },
      3: {
        id: 3,
        body: "yes, we get Memorial Day off.",
        parent_post_id: 1,
        group_id: 4
      }
    },
    users: {
      2: {
        id: 2,
        first_name: "Alex",
        last_name: "Lee",
        birthday: 1964-12-26,
        email: 'alex@microsoft.com',
      },
      25: {
        id: 25,
        first_name: "Jesse",
        last_name: "Lin",
        birthday: 2000-05-01,
        email: 'jesse@genZ.com',
      }
    },
    groups: {
      10: {
        id: 10,
        admin_id: 25,
        name: "Human Resources Team Page",  
        about: "All things HR!"
      },
      11: {
        id: 11,
        admin_id: 2,
        name: "Finance", 
        about: "This group is reserved for the finance team."
      },
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination",],
    signup: ["That looks like a personal email address",],
    postForm: ["Post body cannot be blank"],
  },

  session: { currentUserId: 2 }
}