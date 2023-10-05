class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :refresh_token
      t.string :provider
      t.string :uid

      t.timestamps
    end
  end
end
