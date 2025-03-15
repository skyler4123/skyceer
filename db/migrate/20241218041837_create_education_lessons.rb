class CreateEducationLessons < ActiveRecord::Migration[8.0]
  def change
    create_table :education_lessons, id: :uuid do |t|
      t.string :title, null: false
      t.string :content
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_class, null: true, foreign_key: true, type: :uuid
      t.references :education_subject, null: true, foreign_key: true, type: :uuid
      t.references :education_teacher, null: true, foreign_key: true, type: :uuid
      t.string :uid

      t.timestamps
    end
  end
end
