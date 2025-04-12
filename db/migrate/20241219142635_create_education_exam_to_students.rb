class CreateEducationExamToStudents < ActiveRecord::Migration[8.0]
  def change
    create_table :education_exam_to_students, id: :uuid do |t|
      t.references :education_exam, null: false, foreign_key: true, type: :uuid
      t.references :education_student, null: false, foreign_key: true, type: :uuid
      t.references :education_exam_to_class, null: true, foreign_key: true, type: :uuid
      t.json :answer
      t.decimal :score
      t.integer :status

      t.timestamps
    end
  end
end
