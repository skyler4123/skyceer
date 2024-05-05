class CreateCarStores < ActiveRecord::Migration[7.1]
  def change
    create_table :car_stores, id: :uuid do |t|
      t.string :name
      t.references :car_user, null: false, foreign_key: true, type: :uuid
      t.decimal :coordinates, array: true, default: [0, 0]

      t.timestamps
    end
  end
end
