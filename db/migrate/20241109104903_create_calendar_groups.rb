class CreateCalendarGroups < ActiveRecord::Migration[7.2]
  def change
    create_table :calendar_groups, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :color
      t.string :borderColor
      t.string :backgroundColor
      t.string :dragBackgroundColor
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :calendar_groups, :discarded_at
  end
end
