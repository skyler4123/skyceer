class CreateEducationClasses < ActiveRecord::Migration[7.2]
  def change
    create_table :education_classes, id: :uuid do |t|
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :category

      t.timestamps
    end
  end
end
