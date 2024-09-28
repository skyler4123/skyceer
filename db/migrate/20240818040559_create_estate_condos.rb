class CreateEstateCondos < ActiveRecord::Migration[7.1]
  def change
    create_table :estate_condos, id: :uuid do |t|
      t.references :estate_user, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :address
      t.integer :price_cents
      t.decimal :longitude
      t.decimal :latitude

      t.timestamps
    end
  end
end
