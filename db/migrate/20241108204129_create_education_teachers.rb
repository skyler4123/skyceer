class CreateEducationTeachers < ActiveRecord::Migration[7.2]
  def change
    create_table :education_teachers, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid
      t.references :user, null: true, foreign_key: true, type: :uuid
      t.references :education_school, null: false, foreign_key: true, type: :uuid

      t.string :uid
      t.string :name, null: false
      t.string :email, comment: 'Teacher can be created without user at first time then will match with user by email'
      t.string :status, default: "active", null: false, comment: "Status of the teacher, can be active, inactive, or archived"
      t.string :phone, null: true
      t.string :description, null: false, comment: "Description of the teacher"
      t.string :language, null: false, default: "en", comment: "Language of the teacher, default is English"
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_teachers, :discarded_at
  end
end
