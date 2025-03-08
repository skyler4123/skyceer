class CreateEducationRooms < ActiveRecord::Migration[7.2]
  def change
    create_table :education_rooms, id: :uuid do |t|
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.string :name, null: false
      t.string :category
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_rooms, :discarded_at
  end
end
