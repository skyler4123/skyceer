class CreateEducationSchools < ActiveRecord::Migration[7.2]
  def change
    create_table :education_schools, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :address, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :category

      t.timestamps
    end
  end
end
