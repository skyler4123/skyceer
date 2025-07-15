class CreateEducationCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :education_categories, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid

      t.string :name, null: false
      t.string :uid
      t.string :color
      t.references :parent_category, null: true, foreign_key: { to_table: :education_categories }, type: :uuid
      t.integer :nested_level, default: 0

      t.timestamps
    end
  end
end
