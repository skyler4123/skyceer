class CreateEducationSubjectAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_subject_appointments, id: :uuid do |t|
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.references :education_subject_appointmentable, polymorphic: true, null: false, type: :uuid, index: { name: 'index_education_subject_appointments_on_education_subject_appoi' }

      t.timestamps
    end
  end
end
