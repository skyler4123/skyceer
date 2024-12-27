class CreatePaymentItems < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_items, id: :uuid do |t|
      t.references :payment_user, null: false, foreign_key: true, type: :uuid
      t.references :payment_itemable, polymorphic: true, null: false, type: :uuid
      t.decimal :price

      t.timestamps
    end
  end
end
