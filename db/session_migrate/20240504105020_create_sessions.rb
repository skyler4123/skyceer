class CreateSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :sessions, id: :uuid do |t|
      t.string :user_id, null: false, foreign_key: true, type: :uuid
      t.string :car_user_id, null: false, foreign_key: true, type: :uuid
      t.string :chat_user_id, null: false, foreign_key: true, type: :uuid
      t.string :english_user_id, null: false, foreign_key: true, type: :uuid
      t.string :review_user_id, null: false, foreign_key: true, type: :uuid

      t.string :avatar

      t.string :user_agent
      t.string :ip_address

      t.timestamps
    end
  end
end
