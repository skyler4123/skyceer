class CreateCalendarGroups < ActiveRecord::Migration[7.2]
  def change
    create_table :calendar_groups, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :color
      t.string :border_color
      t.string :background_color
      t.string :drag_background_color

      t.timestamps
    end
  end
end
