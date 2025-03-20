class CreateCalendarCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_categories, id: :uuid do |t|
      t.string :name
      t.string :uid
      t.string :color
      t.references :calendar_userable, polymorphic: true, null: false, type: :uuid
      t.references :parent_category, null: true, foreign_key: { to_table: :calendar_categories }, type: :uuid
      t.integer :nested_level, default: 0
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
