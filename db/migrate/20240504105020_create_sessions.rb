class CreateSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :sessions, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :car_user, null: false, foreign_key: true, type: :uuid
      t.string :chat_user_id, null: false, foreign_key: true, type: :uuid

      t.string :user_agent
      t.string :ip_address

      t.timestamps
    end
  end
end