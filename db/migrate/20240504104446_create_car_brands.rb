class CreateCarBrands < ActiveRecord::Migration[7.1]
  def change
    create_table :car_brands, id: :uuid do |t|
      t.string :name

      t.timestamps
    end
  end
end
