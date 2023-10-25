class CreateDemos < ActiveRecord::Migration[7.0]
  def change
    create_table :demos, id: :uuid do |t|
      t.string :string
      t.text :text
      t.float :float
      t.decimal :decimal
      t.datetime :datetime
      t.time :time
      t.date :date
      t.binary :binary
      t.boolean :boolean
      t.json :json

      t.timestamps
    end
  end
end
