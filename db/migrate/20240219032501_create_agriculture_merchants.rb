class CreateAgricultureMerchants < ActiveRecord::Migration[7.1]
  def change
    create_table :agriculture_merchants, id: :uuid do |t|
      t.references :agriculture_user, null: false, foreign_key: true, type: :uuid
      t.string :name

      t.timestamps
    end
  end
end
