class UpdateTypeToCategory < ActiveRecord::Migration[5.0]
  def change
    rename_column :markers, :type, :category
  end
end
