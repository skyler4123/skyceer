class CreateEducationSchoolAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_school_appointments, id: :uuid do |t|
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_school_appointmentable, polymorphic: true, null: false, type: :uuid, index: { name: 'index_education_school_appointments_on_education_school_appoint' }
      t.datetime :discarded_at
      t.timestamps
    end
  end
end
