class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :conversation_id, null: false
      t.integer :user_id, null: false
      t.string :body, null: false
      t.timestamps
    end
    add_index :comments, :conversation_id
    add_index :comments, :user_id
  end
end
