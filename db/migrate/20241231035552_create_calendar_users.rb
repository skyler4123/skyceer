class CreateCalendarUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_users, id: :uuid do |t|
      t.references :calendar_userable, polymorphic: true, null: false, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
