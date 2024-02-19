class CreateMapUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :map_users, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.string :name

      t.timestamps
    end
  end
end
