class CreateCalendarEvents < ActiveRecord::Migration[7.2]
  def change
    create_table :calendar_events, id: :uuid do |t|
      t.references :calendar_group, null: true, foreign_key: true, type: :uuid
      t.string :lib
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
    add_index :calendar_events, :discarded_at
  end
end
