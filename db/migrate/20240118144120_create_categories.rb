class CreateCategories < ActiveRecord::Migration[7.2]
  def change
    create_table :categories, id: :uuid do |t|
      t.string :uid
      t.string :name
      t.string :color
      t.references :parent_category, null: true, foreign_key: { to_table: :categories }, type: :uuid
      t.integer :nested_level, default: 0

      t.timestamps
    end
  end
end
