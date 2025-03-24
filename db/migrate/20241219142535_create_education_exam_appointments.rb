class CreateEducationExamAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_exam_appointments, id: :uuid do |t|
      t.references :education_exam, null: false, foreign_key: true, type: :uuid
      t.references :appoint_to, polymorphic: true, null: false, type: :uuid
      t.decimal :score
      t.integer :status
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
