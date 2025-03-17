class CreateReportCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :report_categories, id: :uuid do |t|
      t.string :name
      t.string :color
      t.references :parent_category, null: true, foreign_key: { to_table: :report_categories }, type: :uuid
      t.integer :nested_level
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
