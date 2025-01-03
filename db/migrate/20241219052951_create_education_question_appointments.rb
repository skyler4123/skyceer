class CreateEducationQuestionAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_question_appointments, id: :uuid do |t|
      t.references :education_question, null: false, foreign_key: true, type: :uuid
      t.references :education_question_appointmentable, polymorphic: true, null: false, type: :uuid, index: { name: 'index_education_question_appointments_on_education_question_app' }
      t.decimal :score
      t.integer :time
      t.string :status
      t.string :anwser
      t.integer :result

      t.timestamps
    end
  end
end
