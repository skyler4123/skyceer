class CreatePaymentUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_users, id: :uuid do |t|
      t.references :payment_userable, polymorphic: true, null: false, type: :uuid

      t.timestamps
    end
  end
end
