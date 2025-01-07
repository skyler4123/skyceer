class CreateCalendarEvents < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_events, id: :uuid do |t|
      t.references :userable, polymorphic: true, null: false, type: :uuid
      t.references :eventable, polymorphic: true, null: false, type: :uuid
      t.integer :library
      t.string :title
      t.string :body
      t.boolean :isAllday
      t.datetime :start
      t.datetime :end
      t.integer :goingDuration
      t.integer :comingDuration
      t.string :location
      t.text :attendees, array: true, default: []
      t.integer :category
      t.integer :dueDateClass
      t.string :recurrenceRule
      t.integer :state
      t.boolean :isVisible, default: true
      t.boolean :isPending, default: false
      t.boolean :isFocused, default: false
      t.boolean :isReadOnly, default: false
      t.boolean :isPrivate, default: false
      t.string :color, default: '#000'
      t.string :backgroundColor, default: '#a1b56c'
      t.string :dragBackgroundColor, default: '#a1b56c'
      t.string :borderColor, default: 	'#000'
      t.json :customStyle, default: {}
      t.json :raw, default: {}
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
