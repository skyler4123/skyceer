class CreatePaymentCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_category_appointments, id: :uuid do |t|
      t.references :payment_category, null: false, foreign_key: true, type: :uuid
      t.references :payment_customer, null: true, foreign_key: true, type: :uuid
      t.references :payment_method, null: true, foreign_key: true, type: :uuid
      t.references :payment_discount, null: true, foreign_key: true, type: :uuid
      t.references :payment_item, null: true, foreign_key: true, type: :uuid
      t.references :payment_order, null: true, foreign_key: true, type: :uuid
      t.references :payment_invoice, null: true, foreign_key: true, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
