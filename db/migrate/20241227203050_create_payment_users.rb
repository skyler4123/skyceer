class CreatePaymentUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_users, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
