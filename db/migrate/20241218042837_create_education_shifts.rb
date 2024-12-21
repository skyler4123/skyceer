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
      t.boolean :is_allday
      t.datetime :start
      t.datetime :end
      t.integer :going_duration
      t.integer :coming_duration
      t.string :location
      t.text :attendees
      t.integer :category
      t.string :recurrence_rule
      t.integer :state
      t.boolean :is_visible
      t.boolean :is_pending
      t.boolean :is_focused
      t.boolean :is_read_only
      t.boolean :is_private
      t.string :color
      t.string :background_color
      t.string :drag_background_color
      t.string :border_color
      t.json :custom_style
      t.json :raw

      t.timestamps
    end
  end
end