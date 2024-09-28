class CreateSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :sessions, id: :uuid do |t|
      t.string :email
      t.string :name
      t.string :user_id, null: false, foreign_key: true, type: :uuid
      t.string :vehicle_user_id, null: false, foreign_key: true, type: :uuid
      t.string :chat_user_id, null: false, foreign_key: true, type: :uuid
      t.string :english_user_id, null: false, foreign_key: true, type: :uuid
      t.string :article_user_id, null: false, foreign_key: true, type: :uuid
      t.string :estate_user_id, null: false, foreign_key: true, type: :uuid

      t.string :avatar

      t.string :user_agent
      t.string :ip_address

      t.timestamps
    end
  end
end
