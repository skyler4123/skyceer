class CreateEducationStudents < ActiveRecord::Migration[7.2]
  def change
    create_table :education_students, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.string :name

      t.timestamps
    end
  end
end