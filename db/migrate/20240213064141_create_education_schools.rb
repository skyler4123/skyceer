class CreateEducationSchools < ActiveRecord::Migration[7.1]
  def change
    create_table :education_schools, id: :uuid do |t|
      t.references :education_user, null: false, foreign_key: true, type: :uuid
      t.string :name

      t.timestamps
    end
  end
end
