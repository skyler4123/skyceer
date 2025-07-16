class CreateEducationStudents < ActiveRecord::Migration[7.2]
  def change
    create_table :education_students, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid
      t.references :user, null: true, foreign_key: true, type: :uuid
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      t.references :education_parent, null: true, foreign_key: true, type: :uuid
      
      t.string :uid
      t.string :name, null: false
      t.string :email, comment: 'Student can be created without user at first time then will match with user by email'
      t.string :status, default: "active", comment: "Status of the student, can be active, inactive, or archived"
      t.string :phone, null: true
      t.string :description, comment: "Description of the student"
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_students, :discarded_at
  end
end
