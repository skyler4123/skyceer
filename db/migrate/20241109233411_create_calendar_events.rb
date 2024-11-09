class CreateCalendarEvents < ActiveRecord::Migration[7.2]
  def change
    create_table :calendar_events, id: :uuid do |t|
      t.references :calendar_group, null: true, foreign_key: true, type: :uuid
      t.string :lib
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
      t.boolean :is_visible, default: true
      t.boolean :is_pending, default: false
      t.boolean :is_focused, default: false
      t.boolean :is_read_only, default: false
      t.boolean :is_private, default: false
      t.string :color, default: '#000'
      t.string :background_color, default: '#a1b56c'
      t.string :drag_background_color, default: '#a1b56c'
      t.string :border_color, default: 	'#000'
      t.json :custom_style, default: {}
      t.json :raw, default: {}

      t.timestamps
    end
  end
end
