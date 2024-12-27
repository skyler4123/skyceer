class CreatePaymentItemAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_item_appointments, id: :uuid do |t|
      t.references :seller, polymorphic: true, null: false, type: :uuid
      t.references :payment_item, null: false, foreign_key: true, type: :uuid
      t.references :payment_order, null: false, foreign_key: true, type: :uuid
      t.integer :item_quantity
      t.decimal :unit_price

      t.timestamps
    end
  end
end
