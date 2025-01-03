class CreateCalendarCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_category_appointments, id: :uuid do |t|
      t.references :calendar_category, null: false, foreign_key: true, type: :uuid
      t.references :calendar_category_appointmentable, polymorphic: true, null: false, type: :uuid, index: { name: 'index_calendar_category_appointments_on_calendar_category_appoi' }
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
