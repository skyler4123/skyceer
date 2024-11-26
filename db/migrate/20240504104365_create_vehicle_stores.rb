class CreateVehicleStores < ActiveRecord::Migration[7.1]
  def change
    create_table :vehicle_stores, id: :uuid do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.decimal :coordinates, array: true, default: [0, 0]
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :vehicle_stores, :discarded_at
  end
end
