class CreateEducationParents < ActiveRecord::Migration[8.0]
  def change
    create_table :education_parents, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid
      t.references :user, foreign_key: true, type: :uuid
      t.references :education_school, null: false, foreign_key: true, type: :uuid

      t.string :uid
      t.string :name, null: false
      t.string :email, comment: 'Parent can be created without user at first time then will match with user by email'
      t.string :status, default: "active", comment: "Status of the parent, can be active, inactive, or archived"
      t.string :phone, null: true
      t.string :description, comment: "Description of the parent"
      t.string :language, default: "en", comment: "Language of the parent, default is English"
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_parents, :discarded_at
  end
end
