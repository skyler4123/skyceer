class CreateEducationTeachers < ActiveRecord::Migration[7.2]
  def change
    create_table :education_teachers, id: :uuid do |t|
      t.references :user, null: true, foreign_key: true, type: :uuid
      t.string :name
      t.string :email, comment: 'Teacher can be created without user at first time then will match with user by email'
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_teachers, :discarded_at
  end
end
