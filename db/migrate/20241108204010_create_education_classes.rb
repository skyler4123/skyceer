class CreateEducationClasses < ActiveRecord::Migration[7.2]
  def change
    create_table :education_classes, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_course, null: false, foreign_key: true, type: :uuid
      t.string :uid
      t.string :name, null: false
      t.string :description
      t.string :status, default: "active", comment: "Status of the class, can be active, inactive, or archived"
      t.string :color, null: true, comment: "Color theme of the class"
      t.string :language, default: "en", comment: "Language of the class, default is English"
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_classes, :discarded_at
  end
end
 