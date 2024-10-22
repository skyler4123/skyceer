class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email,           null: false, index: { unique: true }
      t.string :password_digest, null: false
      t.string :name
      t.boolean :verified, null: false, default: false
      t.references :address, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
