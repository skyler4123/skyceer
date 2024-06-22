class CreateVehicleUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :vehicle_users, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
