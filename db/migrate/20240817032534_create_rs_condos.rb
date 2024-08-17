class CreateRsCondos < ActiveRecord::Migration[7.1]
  def change
    create_table :rs_condos, id: :uuid do |t|
      t.references :rs_user, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :address
      t.decimal :coordinates, array: true, default: [0, 0]
      t.integer :price_cents

      t.timestamps
    end
  end
end
