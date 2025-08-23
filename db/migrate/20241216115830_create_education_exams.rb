class CreateEducationExams < ActiveRecord::Migration[8.0]
  def change
    create_table :education_exams, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.string :uid
      t.string :name, null: false
      t.string :description
      t.integer :status
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
