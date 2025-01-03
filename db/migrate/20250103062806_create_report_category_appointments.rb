class CreateReportCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :report_category_appointments, id: :uuid do |t|
      t.references :report_category, null: false, foreign_key: true, type: :uuid
      t.references :report_category_appointmentable, polymorphic: true, null: false, type: :uuid, index: {name: 'index_report_category_appointments_on_report_category_appointme'}
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
