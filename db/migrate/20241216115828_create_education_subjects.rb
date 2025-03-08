class CreateEducationSubjects < ActiveRecord::Migration[8.0]
  def change
    create_table :education_subjects, id: :uuid do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.references :education_school, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
