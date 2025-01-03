class CreatePaymentCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :payment_category_appointments, id: :uuid do |t|
      t.references :payment_category, null: false, foreign_key: true, type: :uuid
      t.references :payment_category_appointmentable, polymorphic: true, null: false, type: :uuid, index: {name: 'index_payment_category_appointments_on_payment_category_appoint'}
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
