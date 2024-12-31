class CreateCalendarCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_category_appointments, id: :uuid do |t|
      t.references :calendar_category, null: false, foreign_key: true, type: :uuid
      t.references :calendar_group, null: true, foreign_key: true, type: :uuid
      t.references :calendar_event, null: true, foreign_key: true, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
