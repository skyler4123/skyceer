class CreateReportReporters < ActiveRecord::Migration[8.0]
  def change
    create_table :report_reporters, id: :uuid do |t|
      t.references :report_owner, null: true, foreign_key: true, type: :uuid
      t.references :report_reporterable, polymorphic: true, null: false, type: :uuid

      t.string :name
      t.string :email
      t.string :phone
      t.string :nation
      t.string :description
      t.integer :status, default: 0
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
