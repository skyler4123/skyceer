class CreateEducationTeachers < ActiveRecord::Migration[7.1]
  def change
    create_table :education_teachers, id: :uuid do |t|
      t.references :education_user, null: false, foreign_key: true, type: :uuid
      t.references :education_school, foreign_key: true, type: :uuid
      t.string :name

      t.timestamps
    end
  end
end
