class CreateEducationCourses < ActiveRecord::Migration[8.0]
  def change
    create_table :education_courses, id: :uuid do |t|
      t.string :name
      t.string :description
      t.references :education_school, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
