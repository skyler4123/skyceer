class CreateCalendarEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :calendar_events, id: :uuid do |t|
      t.references :calendar_schedule, null: false, foreign_key: true, type: :uuid

      t.string :title
      t.string :body
      t.boolean :is_allday
      t.datetime :start
      t.datetime :end
      t.integer :going_duration
      t.integer :coming_duration
      t.string :location
      t.text :attendees, array: true, default: []
      t.integer :category
      t.string :recurrence_rule
      t.integer :state
      t.boolean :is_visible
      t.boolean :is_pending
      t.boolean :is_focused
      t.boolean :is_readOnly
      t.boolean :is_private
      t.string :color
      t.string :background_color
      t.string :drag_background_color
      t.string :border_color
      t.json :custom_style, default: {}
      t.text :raw, array: true, default: []

      t.timestamps
    end
  end
end
