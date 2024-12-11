class CreateCategories < ActiveRecord::Migration[7.2]
  def change
    create_table :categories, id: :uuid do |t|
      t.string :name
      t.references :parent_category, null: true, foreign_key: { to_table: :categories }, type: :uuid

      t.timestamps
    end
  end
end
