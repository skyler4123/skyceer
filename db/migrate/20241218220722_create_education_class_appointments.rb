class CreateEducationClassAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_class_appointments, id: :uuid do |t|
      t.references :education_class, null: false, foreign_key: true, type: :uuid
      t.references :education_class_appointmentable, polymorphic: true, null: false, type: :uuid, index: { name: 'index_education_class_appointments_on_education_class_appointme' }

      t.timestamps
    end
  end
end
