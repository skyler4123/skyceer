class CreateReportUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :report_users, id: :uuid do |t|
      t.references :report_userable, polymorphic: true, null: false, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
