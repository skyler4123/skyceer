class CreateEducationCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_category_appointments, id: :uuid do |t|
      t.references :education_category, null: false, foreign_key: true, type: :uuid
      t.references :education_class, null: true, foreign_key: true, type: :uuid
      t.references :education_room, null: true, foreign_key: true, type: :uuid
      t.references :education_teacher, null: true, foreign_key: true, type: :uuid
      t.references :education_student, null: true, foreign_key: true, type: :uuid
      t.references :education_subject, null: true, foreign_key: true, type: :uuid
      t.references :education_course, null: true, foreign_key: true, type: :uuid
      t.references :education_exam, null: true, foreign_key: true, type: :uuid
      t.references :education_question, null: true, foreign_key: true, type: :uuid
      t.references :education_lesson, null: true, foreign_key: true, type: :uuid
      t.references :education_shift, null: true, foreign_key: true, type: :uuid
      t.integer :level

      t.timestamps
    end
  end
end
