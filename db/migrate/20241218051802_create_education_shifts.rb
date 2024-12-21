class CreateEducationShifts < ActiveRecord::Migration[8.0]
  def change
    create_table :education_shifts, id: :uuid do |t|
      t.string :title
      t.string :location
      t.datetime :start_time
      t.datetime :end_time
      t.integer :duration
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_class, null: false, foreign_key: true, type: :uuid
      t.references :education_subject, null: false, foreign_key: true, type: :uuid
      t.references :education_teacher, null: false, foreign_key: true, type: :uuid

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
  end
end
