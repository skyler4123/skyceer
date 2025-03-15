class CreatePaymentCustomers < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_customers, id: :uuid do |t|
      t.references :payment_customerable, polymorphic: true, null: false, type: :uuid
      t.string :uid
      t.string :name
      t.string :email
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
