class CreateReportFrontends < ActiveRecord::Migration[7.2]
  def change
    create_table :report_frontends, id: :uuid do |t|
      t.references :user, null: true, foreign_key: true, type: :uuid
      t.string :content

      t.timestamps
    end
  end
end
