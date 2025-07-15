class CreateEducationStaffs < ActiveRecord::Migration[7.2]
  def change
    create_table :education_staffs, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid
      t.references :user, null: true, foreign_key: true, type: :uuid
      t.references :education_school, null: false, foreign_key: true, type: :uuid
      
      t.string :uid
      t.string :name, null: false
      t.string :position
      t.string :title
      t.string :department
      t.string :avatar
      t.string :phone
      t.string :email, comment: 'Student can be created without user at first time then will match with user by email'
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_staffs, :discarded_at
  end
end
