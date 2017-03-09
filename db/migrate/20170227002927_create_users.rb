class CreateUsers < ActiveRecord::Migration[5.0]
  def change

    drop_table(:users, if_exists: true)


    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
