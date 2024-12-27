class CreatePaymentCustomers < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_customers, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
