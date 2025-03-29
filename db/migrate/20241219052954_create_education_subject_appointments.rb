class CreateEducationSubjectAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_subject_appointments, id: :uuid do |t|
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.references :appoint_from, polymorphic: true, null: false, type: :uuid, comment: "Appoint From Teacher, can be null if appointment only to assinged subject to class as placeholder"
      t.references :appoint_to, polymorphic: true, null: false, type: :uuid, comment: "Appoint To Class, can be null if appointment only to assinged subject to teacher as placeholder"

      t.timestamps
    end
  end
end
