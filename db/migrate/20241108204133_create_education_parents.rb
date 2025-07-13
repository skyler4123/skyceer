class CreateEducationParents < ActiveRecord::Migration[8.0]
  def change
    create_table :education_parents, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :education_school, null: false, foreign_key: true, type: :uuid

      t.string :uid
      t.string :name, null: false
      t.string :email, comment: 'Parent can be created without user at first time then will match with user by email'
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_parents, :discarded_at
  end
end
