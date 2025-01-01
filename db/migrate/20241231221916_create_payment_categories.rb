class CreatePaymentCategories < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_categories, id: :uuid do |t|
      t.string :name
      t.references :payment_user, null: false, foreign_key: true, type: :uuid
      t.references :parent_category, null: true, foreign_key: { to_table: :payment_categories }, type: :uuid
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
