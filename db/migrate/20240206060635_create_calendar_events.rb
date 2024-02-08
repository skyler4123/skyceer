class CreateCalendarEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :calendar_events, id: :uuid do |t|
      t.references :calendar_schedule, null: false, foreign_key: true, type: :uuid

      t.string :calendarId
      t.string :title
      t.string :body
      t.boolean :isAllday
      t.datetime :start
      t.datetime :end
      t.integer :goingDuration
      t.integer :comingDuration
      t.string :location
      t.text :attendees, array: true, default: [];
      t.integer :category;
      t.string :recurrenceRule
      t.integer :state
      t.boolean :isVisible
      t.boolean :isPending
      t.boolean :isFocused
      t.boolean :isReadOnly
      t.boolean :isPrivate
      t.string :color
      t.string :backgroundColor
      t.string :dragBackgroundColor
      t.string :borderColor
      t.json :customStyle, default: {}
      t.text :raw, array: true, default: []

      t.timestamps
    end
  end
end
