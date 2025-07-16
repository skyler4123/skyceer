class CreateCalendarGroups < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_groups, id: :uuid do |t|
      t.references :calendar_owner, null: false, foreign_key: true, type: :uuid
      t.references :calendar_groupable, polymorphic: true, null: false, type: :uuid
      t.string :uid
      t.string :name
      t.string :color
      t.string :borderColor
      t.string :backgroundColor
      t.string :dragBackgroundColor
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
