class CreatePaymentMethods < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_methods, id: :uuid do |t|
      t.string :name
      t.string :description
      t.integer :region
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
