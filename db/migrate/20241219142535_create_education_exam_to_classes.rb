class CreateEducationExamToClasses < ActiveRecord::Migration[8.0]
  def change
    create_table :education_exam_to_classes, id: :uuid do |t|
      t.references :education_exam, null: false, foreign_key: true, type: :uuid
      t.references :education_class, null: false, foreign_key: true, type: :uuid
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.string :uid
      t.string :name
      t.string :description
      t.decimal :score
      t.integer :status
      t.datetime :discarded_at

      t.timestamps
    end

    add_index :education_exam_to_classes, :discarded_at
  end
end
