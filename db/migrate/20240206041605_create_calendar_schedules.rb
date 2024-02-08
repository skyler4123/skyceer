class CreateCalendarSchedules < ActiveRecord::Migration[7.1]
  def change
    create_table :calendar_schedules, id: :uuid do |t|
      t.references :calendar_user, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :color
      t.string :background_color
      t.string :drag_background_color
      t.string :border_color
      
      t.timestamps
    end
  end
end
