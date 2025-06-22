class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :username,        null: true, index: { unique: true }
      t.string :uid
      t.string :email,           null: true, index: { unique: true }
      t.string :password_digest, null: false

      t.string :name
      t.string :first_name
      t.string :last_name
      t.string :avatar
      t.string :phone_number
      t.string :country_code
      t.integer :role
      t.integer :education_role
      t.boolean :verified, null: false, default: false
      t.references :address, null: true, foreign_key: true, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :users, :discarded_at
  end
end
