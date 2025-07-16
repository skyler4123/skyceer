class CreateReportReporters < ActiveRecord::Migration[8.0]
  def change
    create_table :report_reporters, id: :uuid do |t|
      t.references :report_owner, null: true, foreign_key: true, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
