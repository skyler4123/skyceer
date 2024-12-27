class CreatePaymentInvoices < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_invoices, id: :uuid do |t|
      t.references :payment_order, null: false, foreign_key: true, type: :uuid
      t.string :transaction_id
      t.integer :status
      t.datetime :due_date
      t.decimal :amount
      t.string :tax_code

      t.timestamps
    end
  end
end
