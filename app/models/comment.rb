class Comment < ApplicationRecord
  validates :body, :conversation_id, :user_id, presence: true 


  
end
