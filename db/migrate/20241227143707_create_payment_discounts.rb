class CreatePaymentDiscounts < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_discounts, id: :uuid do |t|
      t.references :publisher, polymorphic: true, null: false, type: :uuid
      t.string :name
      t.string :description
      t.string :code
      t.datetime :expire
      t.decimal :amount
      t.integer :status
      t.integer :kind

      t.timestamps
    end
  end
end
