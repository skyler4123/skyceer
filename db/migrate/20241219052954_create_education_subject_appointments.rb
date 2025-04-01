class CreateEducationSubjectAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_subject_appointments, id: :uuid do |t|
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.references :education_class, null: false, foreign_key: true, type: :uuid
      t.references :education_teacher, null: false, foreign_key: true, type: :uuid
      t.integer :status, comment: "0 = assigned, 1 = unassigned"
      t.datetime :discarded_at, index: true, comment: "Soft delete"
      t.string :uid, comment: "Unique Identifier"
      t.string :name, comment: "Name of the appointment"
      t.string :description, comment: "Description of the appointment"
      t.datetime :start_at, comment: "Start date and time of the appointment"
      t.datetime :end_at, comment: "End date and time of the appointment"
      t.datetime :appoint_at, comment: "Appointment date and time"
      t.datetime :cancel_at, comment: "Cancellation date and time"
      t.datetime :reschedule_at, comment: "Reschedule date and time"
      t.datetime :remind_at, comment: "Remind date and time"
      t.string :remind_type, comment: "Remind type, can be email, sms, push notification, etc."
      t.string :remind_to, comment: "Remind to, can be teacher, student, parent, etc."

      t.timestamps
    end
  end
end
