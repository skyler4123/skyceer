class CreateCalendarEventAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_event_appointments, id: :uuid do |t|
      t.references :calendar_event, null: false, foreign_key: true, type: :uuid
      t.references :calendar_event_appointmentable, polymorphic: true, null: false, type: :uuid, index: { name: 'index_calendar_event_appointments_on_calendar_event_appointment' }
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
