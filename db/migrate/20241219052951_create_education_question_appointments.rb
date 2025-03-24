class CreateEducationQuestionAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_question_appointments, id: :uuid do |t|
      t.references :education_question, null: false, foreign_key: true, type: :uuid
      t.references :appoint_to, polymorphic: true, null: false, type: :uuid
      t.decimal :score
      t.integer :time
      t.string :status
      t.string :anwser
      t.integer :result

      t.timestamps
    end
  end
end
