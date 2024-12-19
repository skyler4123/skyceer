class CreateEducationQuestions < ActiveRecord::Migration[8.0]
  def change
    create_table :education_questions, id: :uuid do |t|
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_teacher, null: false, foreign_key: true, type: :uuid
      t.integer :question_type
      t.string :title
      t.string :content
      t.string :anwser
      t.string :choice_1
      t.string :choice_2
      t.string :choice_3
      t.string :choice_4

      t.timestamps
    end
  end
end
