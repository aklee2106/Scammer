@conversations.each do |conversation|
  json.set! conversation.id do
    json.extract! conversation, :id, :body, :author_id, :created_at
  end
end