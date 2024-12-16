class CreateEducationExamQuestions < ActiveRecord::Migration[8.0]
  def change
    create_table :education_exam_questions, id: :uuid do |t|
      t.references :education_exam, null: false, foreign_key: true, type: :uuid
      t.references :education_question, null: false, foreign_key: true, type: :uuid
      t.decimal :score
      t.integer :time
      t.string :status
      t.string :anwser
      t.integer :result

      t.timestamps
    end
  end
end
