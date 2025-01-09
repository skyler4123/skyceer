class CreateEducationExamAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_exam_appointments, id: :uuid do |t|
      t.references :education_exam, null: false, foreign_key: true, type: :uuid
      t.references :education_exam_appointmentable, polymorphic: true, null: false, type: :uuid, index: { name: 'index_education_exam_appointments_on_education_exam_appointment' }
      t.decimal :score
      t.integer :status
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
