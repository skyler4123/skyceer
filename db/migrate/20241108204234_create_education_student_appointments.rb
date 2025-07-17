class CreateEducationStudentAppointments < ActiveRecord::Migration[7.2]
  def change
    create_table :education_student_appointments, id: :uuid do |t|
      t.references :education_student, null: false, foreign_key: true, type: :uuid
      t.references :appoint_to, polymorphic: true, null: false, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_students, :discarded_at
  end
end
