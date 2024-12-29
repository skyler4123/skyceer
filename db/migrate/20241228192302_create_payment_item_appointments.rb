class CreatePaymentItemAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_item_appointments, id: :uuid do |t|
      t.references :payment_item, null: false, foreign_key: true, type: :uuid
      t.references :payment_order, null: false, foreign_key: true, type: :uuid
      t.integer :item_quantity
      t.decimal :unit_price
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
