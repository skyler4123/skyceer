class CreateCarCars < ActiveRecord::Migration[7.1]
  def change
    create_table :car_cars, id: :uuid do |t|
      t.string :name
      t.string :model
      t.references :car_brand, null: true, foreign_key: true, type: :uuid
      t.references :car_store, null: true, foreign_key: true, type: :uuid
      t.references :car_user, null: true, foreign_key: true, type: :uuid
      t.decimal :price
      t.string :version
      t.decimal :coordinates, array: true, default: [0, 0]
      t.datetime :released_at
      t.boolean :verified
      t.boolean :expired

      t.timestamps
    end
  end
end
