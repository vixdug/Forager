class AddUsersTable < ActiveRecord::Migration[5.0]
  def up
    add_column :users, :description, :text
    add_attachment :users, :avatar
  end

  def down
    remove_column :users, :description, :text
    remove_attachment :users, :avatar
  end
end
