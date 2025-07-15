class CreateEducationAdmins < ActiveRecord::Migration[8.0]
  def change
    create_table :education_admins, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :education_school, null: false, foreign_key: true, type: :uuid

      t.string :uid
      t.string :name, null: false
      t.string :email, comment: 'Admin can be created without user at first time then will match with user by email'

      t.timestamps
    end
  end
end
