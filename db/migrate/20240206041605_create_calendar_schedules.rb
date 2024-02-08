class CreateCalendarSchedules < ActiveRecord::Migration[7.1]
  def change
    create_table :calendar_schedules, id: :uuid do |t|
      t.references :calendar_user, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :color
      t.string :backgroundColor
      t.string :dragBackgroundColor
      t.string :borderColor
      
      t.timestamps
    end
  end
end
