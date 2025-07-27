class CreatePaymentDiscounts < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_discounts, id: :uuid do |t|
      t.references :payment_owner, null: false, foreign_key: true, type: :uuid
      t.string :uid
      t.string :name
      t.string :description
      t.string :code
      t.datetime :expire
      t.decimal :amount
      t.integer :status
      t.integer :kind
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
