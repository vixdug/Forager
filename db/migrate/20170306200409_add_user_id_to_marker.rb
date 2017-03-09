class AddUserIdToMarker < ActiveRecord::Migration[5.0]
  def up
  add_reference :markers, :user, index: true
  add_foreign_key :markers, :users
  end

  def down
    remove_reference :markers, :user, index: true
    remove_foreign_key :markers, :users
  end
end
