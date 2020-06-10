@users.each do |user|
  json.partial! 'api/users/user', user: user
end

#json.users do 
#  @users.each do |user|
#    json.set! user.id do
#      json.extract! user, :id, :first_name, :last_name, :email, :network_id
#    end
#  end
#end