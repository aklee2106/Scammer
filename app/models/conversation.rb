class Conversation < ApplicationRecord

  belongs_to :user, 
    foreign_key: :author_id,
    class_name: :User

  belongs_to :group,
    foreign_key: :group_id,
    class_name: :Group
  
  #parent_conversation

  

end
