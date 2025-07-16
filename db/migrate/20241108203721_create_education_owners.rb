class CreateEducationOwners < ActiveRecord::Migration[7.2]
  def change
    create_table :education_owners, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.string :uid
      t.string :name, null: false
      t.string :email, null: false, comment: "Email address of the school can be different from the user's email address"
      t.string :category
      t.string :phone, null: false, comment: "Phone number of the school can be different from the user's phone number"
      t.string :description, null: false, comment: "Description of the school"
      t.string :status, default: "active", null: false, comment: "Status of the school, can be active, inactive, or archived"
      t.string :website, null: false, comment: "Website of the school"
      t.string :avatar, null: true, comment: "Avatar image of the school"
      t.string :logo, null: true
      t.string :banner, null: true
      t.string :color, null: true, comment: "Color theme of the school"
      t.string :timezone, null: false, default: "UTC", comment: "Timezone of the school, default is UTC"
      t.string :language, null: false, default: "en", comment: "Language of the school, default is English"
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_owners, :discarded_at
  end
end
