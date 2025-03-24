class CreateEducationClassAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_class_appointments, id: :uuid do |t|
      t.references :education_class, null: false, foreign_key: true, type: :uuid
      t.references :appoint_to, polymorphic: true, null: false, type: :uuid

      t.timestamps
    end
  end
end
