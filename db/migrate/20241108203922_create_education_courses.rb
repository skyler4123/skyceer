class CreateEducationCourses < ActiveRecord::Migration[8.0]
  def change
    create_table :education_courses, id: :uuid do |t|
      t.references :education_school, null: false, foreign_key: true, type: :uuid

      t.string :uid
      t.string :name, null: false
      t.string :description
      t.string :status, default: "active", comment: "Status of the course, can be active, inactive, or archived"

      t.timestamps
    end
  end
end
