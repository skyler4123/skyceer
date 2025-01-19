class CreateEducationAdmins < ActiveRecord::Migration[8.0]
  def change
    create_table :education_admins, id: :uuid do |t|
      t.references :user, null: true, foreign_key: true, type: :uuid
      t.string :name
      t.string :email, comment: 'Admin can be created without user at first time then will match with user by email'

      t.timestamps
    end
  end
end
