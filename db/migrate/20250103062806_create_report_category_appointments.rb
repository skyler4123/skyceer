class CreateReportCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :report_category_appointments, id: :uuid do |t|
      t.references :report_category, null: false, foreign_key: true, type: :uuid
      t.references :appoint_to, polymorphic: true, null: false, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
