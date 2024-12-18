class CreateEducationClassAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_class_appointments, id: :uuid do |t|
      t.references :education_class, null: false, foreign_key: true, type: :uuid
      t.references :education_teacher, null: true, foreign_key: true, type: :uuid
      t.references :education_student, null: true, foreign_key: true, type: :uuid
      t.references :education_subject, null: true, foreign_key: true, type: :uuid
      t.references :education_room, null: true, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
