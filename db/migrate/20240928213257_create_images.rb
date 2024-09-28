class CreateImages < ActiveRecord::Migration[7.2]
  def change
    create_table :images, id: :uuid do |t|
      t.string :name
      t.string :rule

      t.timestamps
    end
  end
end
