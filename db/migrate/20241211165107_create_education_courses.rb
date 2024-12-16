class CreateEducationCourses < ActiveRecord::Migration[8.0]
  def change
    create_table :education_courses, id: :uuid do |t|
      t.string :name
      t.string :duration
      t.string :datetime
      t.text :description
      t.string :contact_email
      t.string :img_url
      t.references :education_school, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
