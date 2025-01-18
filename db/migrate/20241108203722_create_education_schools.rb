class CreateEducationSchools < ActiveRecord::Migration[7.2]
  def change
    create_table :education_schools, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :address, null: true, foreign_key: true, type: :uuid
      t.string :name
      t.string :email
      t.string :category
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_schools, :discarded_at
  end
end
