class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email,           null: false, index: { unique: true }
      t.string :password_digest, null: false

      t.string :name
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
