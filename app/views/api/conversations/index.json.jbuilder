json.conversations do 
  @conversations.each do |conversation|
    json.set! conversation.id do
      json.extract! conversation, :id, :body, :author_id, :created_at
      # json.author do
      #   json.extract! conversation.author, :id, :first_name, :last_name
      # end
    end
  end
end

json.users do 
  @users.each do |user|
    json.set! user.id do 
      json.extract! user, :id, :first_name, :last_name, :email, :network_id
    end
  end
end
