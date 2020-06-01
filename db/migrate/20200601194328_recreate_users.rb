class RecreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name 
      t.string :last_name 
      t.date :birthday
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :network_id
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :network_id 

  end
end
