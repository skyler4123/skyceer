class CreateEducationShifts < ActiveRecord::Migration[8.0]
  def change
    create_table :education_shifts, id: :uuid do |t|
      t.string :title
      t.string :location
      t.datetime :start_time
      t.datetime :end_time
      t.integer :duration
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_class, null: false, foreign_key: true, type: :uuid
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.references :education_teacher, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
