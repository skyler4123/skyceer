class CreatePaymentOrders < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_orders, id: :uuid do |t|
      t.references :seller, polymorphic: true, null: false, type: :uuid
      t.references :buyer, polymorphic: true, null: false, type: :uuid
      t.references :payment_method, null: false, foreign_key: true, type: :uuid
      t.references :payment_discount, null: false, foreign_key: true, type: :uuid
      t.integer :status
      t.decimal :total
      t.decimal :paid
      t.decimal :due
      t.datetime :expire

      t.timestamps
    end
  end
end
