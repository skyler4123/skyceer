class CreateEducationSubjectToTeachers < ActiveRecord::Migration[8.0]
  def change
    create_table :education_subject_to_teachers, id: :uuid do |t|
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.references :education_teacher, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
