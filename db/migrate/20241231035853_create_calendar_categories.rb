class CreateCalendarCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_categories, id: :uuid do |t|
      t.references :calendar_owner, null: false, foreign_key: true, type: :uuid
      t.references :parent_category, null: true, foreign_key: { to_table: :calendar_categories }, type: :uuid

      t.string :name
      t.string :uid
      t.string :color
      t.integer :nested_level, default: 0
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
