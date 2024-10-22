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

      t.timestamps
    end
  end
end
