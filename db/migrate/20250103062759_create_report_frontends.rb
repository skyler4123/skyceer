class CreateReportFrontends < ActiveRecord::Migration[8.0]
  def change
    create_table :report_frontends, id: :uuid do |t|
      t.references :report_user, null: true, foreign_key: true, type: :uuid
      t.string :content
      t.string :url
      t.json :cookie
      t.integer :status
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
