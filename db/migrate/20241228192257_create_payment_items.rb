class CreatePaymentItems < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_items, id: :uuid do |t|
      t.references :payment_owner, null: false, foreign_key: true, type: :uuid
      t.references :payment_itemable, polymorphic: true, null: false, type: :uuid
      t.string :uid
      t.decimal :price
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
