class CreateAddresses < ActiveRecord::Migration[7.2]
  def change
    create_table :addresses, id: :uuid do |t|
      t.string :unit_number
      t.string :street_number
      t.string :address_line_1
      t.string :address_line_2
      t.string :city
      t.string :country_code
      t.string :postal_code
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
    add_index :addresses, :unit_number
    add_index :addresses, :street_number
    add_index :addresses, :address_line_1
    add_index :addresses, :address_line_2
    add_index :addresses, :city
    add_index :addresses, :country_code
    add_index :addresses, :postal_code
  end
end
