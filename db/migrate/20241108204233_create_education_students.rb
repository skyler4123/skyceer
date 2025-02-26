class CreateEducationStudents < ActiveRecord::Migration[7.2]
  def change
    create_table :education_students, id: :uuid do |t|
      t.references :user, null: true, foreign_key: true, type: :uuid
      t.string :name
      t.string :email, comment: 'Student can be created without user at first time then will match with user by email'
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_students, :discarded_at
  end
end
