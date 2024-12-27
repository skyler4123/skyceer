class CreatePaymentMethodAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_method_appointments, id: :uuid do |t|
      t.references :payment_user, null: false, foreign_key: true, type: :uuid
      t.references :payment_method, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
