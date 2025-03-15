class CreateCalendarEvents < ActiveRecord::Migration[8.0]
  def change
    create_table :calendar_events, id: :uuid do |t|
      t.references :calendar_group, null: false, foreign_key: true, type: :uuid
      t.string :uid
      t.integer :library
      t.string :title
      t.string :body
      t.boolean :isAllday
      t.datetime :start
      t.datetime :end
      t.integer :goingDuration
      t.integer :comingDuration
      t.string :location
      t.text :attendees
      t.integer :category
      t.string :dueDateClass
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
      t.json :customStyle
      t.json :raw
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
