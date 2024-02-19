class CreateMapLocations < ActiveRecord::Migration[7.1]
  def change
    create_table :map_locations, id: :uuid do |t|
      t.string :name

      t.timestamps
    end
  end
end
