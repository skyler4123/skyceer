class CreatePaymentLogs < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_logs, id: :uuid do |t|
      t.references :seller, polymorphic: true, null: false, type: :uuid
      t.references :buyer, polymorphic: true, null: false, type: :uuid
      t.references :payment_order, null: false, foreign_key: true, type: :uuid
      t.references :payment_method, null: false, foreign_key: true, type: :uuid
      t.references :payment_discount, null: false, foreign_key: true, type: :uuid
      t.references :payment_invoice, null: false, foreign_key: true, type: :uuid
      t.string :action
      t.decimal :amount
      t.string :note

      t.timestamps
    end
  end
end
