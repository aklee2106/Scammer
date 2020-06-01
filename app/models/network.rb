class Network < ApplicationRecord

  has_many :users,
    foreign_key: :network_id,
    class_name: :User

  has_many :groups, 
    foreign_key: :network_id, 
    class_name: :Group

    
end
