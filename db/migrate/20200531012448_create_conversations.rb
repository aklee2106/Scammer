class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.string :name, null: false
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :parent_convo_id, null: false
      t.integer :group_id, null: false
      t.timestamps
      t.timestamps
    end

    add_index :conversations, :author_id
    add_index :conversations, :group_id
    add_index :conversations, :parent_convo_id
  end
end
