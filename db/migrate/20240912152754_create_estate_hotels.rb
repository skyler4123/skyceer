class CreateEstateHotels < ActiveRecord::Migration[7.1]
  def change
    create_table :estate_hotels, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :address, null: true, foreign_key: true, type: :uuid
      t.string :name
      t.integer :price_cents
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :estate_hotels, :discarded_at
  end
end
