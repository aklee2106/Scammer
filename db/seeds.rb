# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create!(
  email: 'alex@microsoft.com',
  password: '1234567',
  first_name: "alex",
  last_name: "lee",
  birthday: Date.new,
  network_id: 2, 
)

u2 = User.create!(
  email: 'jesse@aa.com',
  password: 'hunter12',
  first_name: "Jesse",
  last_name: "Lin",
  network_id: 2
)

demo = User.create!(
  email: 'jeff@amazon.com',
  password: 'hunter12',
  first_name: "Jeff",
  last_name: "Bezos",
  birthday: Date.new,
  network_id: 10, 
)

c1= Conversation.create!(
  body: "My name is Jesse- Do we get Memorial Day off?",
  author_id: u2.id,
  created_at: Date.new, 
)

c2= Conversation.create!(
  body: "I am the founder of Amazon",
  author_id: demo.id,
  created_at: Date.new, 
)

c3= Conversation.create!(
  body: "Hey everyone this is Alex",
  author_id: u1.id,
  created_at: Date.new, 
)

