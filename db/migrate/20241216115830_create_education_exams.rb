class CreateEducationExams < ActiveRecord::Migration[8.0]
  def change
    create_table :education_exams, id: :uuid do |t|
      t.string :name
      t.string :description
      t.decimal :score
      t.integer :status
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.references :education_student, null: false, foreign_key: true, type: :uuid
      t.references :education_category, null: true, foreign_key: true, type: :uuid
      t.references :education_course, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
