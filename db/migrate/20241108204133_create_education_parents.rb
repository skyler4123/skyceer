class CreateEducationParents < ActiveRecord::Migration[8.0]
  def change
    create_table :education_parents, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :education_school_user, null: true, foreign_key: { to_table: :users }, type: :uuid
      
      t.string :name, null: false
      t.string :email, comment: 'Parent can be created without user at first time then will match with user by email'
      t.datetime :discarded_at

      t.timestamps
    end
  end
end
