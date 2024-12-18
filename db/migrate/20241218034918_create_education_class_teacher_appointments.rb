class CreateEducationClassTeacherAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_class_teacher_appointments, id: :uuid do |t|
      t.references :education_class, null: false, foreign_key: true, type: :uuid
      t.references :education_teacher, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
