class CreateVehicleCars < ActiveRecord::Migration[7.1]
  def change
    create_table :vehicle_cars, id: :uuid do |t|
      t.string :name
      t.string :model
      t.string :brand
      t.references :vehicle_store, null: true, foreign_key: true, type: :uuid
      t.references :vehicle_user, null: true, foreign_key: true, type: :uuid
      t.integer :price
      t.string :version
      t.integer :year
      t.integer :post_purpose
      t.decimal :coordinates, array: true, default: [0, 0]
      t.datetime :released_at
      t.boolean :verified
      t.boolean :expired

      t.timestamps
    end
  end
end
