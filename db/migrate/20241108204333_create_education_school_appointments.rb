class CreateEducationSchoolAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_school_appointments, id: :uuid do |t|
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_admin, null: true, foreign_key: true, type: :uuid
      t.references :education_teacher, null: true, foreign_key: true, type: :uuid
      t.references :education_student, null: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
