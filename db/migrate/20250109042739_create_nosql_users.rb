class CreateNosqlUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :nosql_users, id: :uuid do |t|
      t.string :user_id
      t.string :address_id
      t.string :name
      t.string :avatar
      t.integer :role
      t.integer :education_role

      t.timestamps
    end
  end
end
