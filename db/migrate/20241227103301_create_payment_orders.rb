class CreatePaymentOrders < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_orders, id: :uuid do |t|
      t.uuid :seller, null: false
      t.uuid :buyer, null: false
      t.references :payment_method, null: false, foreign_key: true, type: :uuid
      t.references :payment_discount, null: false, foreign_key: true, type: :uuid
      t.integer :status
      t.decimal :total
      t.decimal :paid
      t.decimal :due
      t.datetime :expire

      t.timestamps
    end

    add_foreign_key :payment_orders, :payment_users, column: :seller, type: :uuid
    add_foreign_key :payment_orders, :payment_users, column: :buyer, type: :uuid
  end
end
