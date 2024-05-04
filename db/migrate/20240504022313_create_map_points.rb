class CreateMapPoints < ActiveRecord::Migration[7.1]
  def change
    create_table :map_points, id: :uuid do |t|
      t.decimal :coordinates, array: true, default: [0, 0]
      t.references :mapable, polymorphic: true, null: true, type: :uuid
      t.references :map_user, null: true, foreign_key: true, type: :uuid
      t.boolean :verified
      t.boolean :expired

      t.timestamps
    end
  end
end
