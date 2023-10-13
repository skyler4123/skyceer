class CreateLaptops < ActiveRecord::Migration[7.0]
  def change
    create_table :laptops, id: :uuid do |t|
      t.string :name
      t.string :brand
      t.string :model
      t.decimal :unit_price
      t.integer :quantity
      t.integer :color
      t.integer :hard_disk
      t.string :cpu
      t.string :ram
      t.string :os
      t.string :graphic_card
      t.float :screen_size

      t.timestamps
    end
  end
end
