# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Network.destroy_all
Group.destroy_all
Conversation.destroy_all
User.destroy_all


u1 = User.create!(
  email: 'alex@amazon.com',
  password: 'hunter12',
  first_name: "Alex",
  last_name: "Lee",
  birthday: Date.new,
  network_id: 10, 
)

u2 = User.create!(
  email: 'jesse@amazon.com',
  password: 'hunter12',
  first_name: "Jesse",
  last_name: "Lin",
  network_id: 10
)

u3 = User.create!(
  email: 'tiff@amazon.com',
  password: 'hunter12',
  first_name: "Tiffany",
  last_name: "Chin",
  network_id: 10
)

demo = User.create!(
  email: 'jeff@amazon.com',
  password: 'hunter12',
  first_name: "Jeff",
  last_name: "Bezos",
  birthday: Date.new,
  network_id: 10, 
)

n1 = Network.create!(
  name: 'Amazon',
)

g1 = Group.create!(
  name: 'CEO Corner',
  admin_id: demo.id,
  network_id: n1.id
) 

g2 = Group.create!(
  name: 'Finance Team',
  admin_id: u1.id,
  network_id: n1.id
)


c1= Conversation.create!(
  body: "My name is Jesse- Do we get Memorial Day off?",
  author_id: u2.id,
  created_at: Date.new(2019,02,03), 
)

c2= Conversation.create!(
  body: "I am the founder of Amazon",
  author_id: demo.id,
  created_at: Date.new(2020,06,01), 
)

c3= Conversation.create!(
  body: "Hey everyone this is Alex",
  author_id: u1.id,
  created_at: Date.new(2020,05,20), 
)

c4= Conversation.create!(
  body: "This post is for the Finance Group",
  author_id: u1.id,
  group_id: g2.id,
  created_at: Date.new(2020,05,20), 
)

c5= Conversation.create!(
  body: "This post is for CEO Corner",
  author_id: u1.id,
  group_id: g1.id,
  created_at: Date.new(2020,05,20), 
)




