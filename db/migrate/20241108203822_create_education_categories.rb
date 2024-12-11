class CreateEducationCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :education_categories, id: :uuid do |t|
      t.string :name
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :parent_category, null: true, foreign_key: { to_table: :education_categories }, type: :uuid

      t.timestamps
    end
  end
end
