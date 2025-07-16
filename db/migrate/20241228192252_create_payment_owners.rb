class CreatePaymentOwners < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_owners, id: :uuid do |t|
      t.references :payment_ownerable, polymorphic: true, null: false, type: :uuid
      t.string :uid
      t.datetime :discarded_at
      t.string :status, default: "active", null: false, comment: "Status of the payment owner, can be active, inactive, or archived"
      t.string :name, null: false, comment: "Name of the payment owner"
      t.string :description, null: false, comment: "Description of the payment owner"
      t.string :language, null: false, default: "en", comment: "Language of the payment owner, default is English"
      t.string :email, null: true, comment: "Email of the payment owner, can be null if not provided"
      t.string :phone, null: true, comment: "Phone number of the payment owner, can be null if not provided"

      t.timestamps
    end
    add_index :payment_owners, :discarded_at
  end
end
