class CreateCalendarOwners < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_owners, id: :uuid do |t|
      t.references :calendar_ownerable, polymorphic: true, null: false, type: :uuid
      t.string :uid
      t.string :name
      t.string :email
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :calendar_owners, :discarded_at
  end
end
