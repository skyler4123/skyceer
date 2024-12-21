class CreateEducationShifts < ActiveRecord::Migration[8.0]
  def change
    create_table :education_shifts, id: :uuid do |t|
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

      t.timestamps
    end
  end
end
