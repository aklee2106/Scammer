class Group < ApplicationRecord

  belongs_to :network,
    foreign_key: :network_id,
    class_name: :Network

  belongs_to :admin,
    foreign_key: :admin_id,
    class_name: :User
  
end
