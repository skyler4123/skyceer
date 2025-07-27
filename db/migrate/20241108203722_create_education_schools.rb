class CreateEducationSchools < ActiveRecord::Migration[7.2]
  def change
    create_table :education_schools, id: :uuid do |t|
      t.references :education_owner, null: false, foreign_key: true, type: :uuid
      t.references :address, null: true, foreign_key: true, type: :uuid
      t.string :uid
      t.string :name, null: false
      t.string :email, comment: "Email address of the school can be different from the user's email address"
      t.string :category
      t.string :phone, comment: "Phone number of the school can be different from the user's phone number"
      t.string :description, comment: "Description of the school"
      t.string :status, default: "active", comment: "Status of the school, can be active, inactive, or archived"
      t.string :website, comment: "Website of the school"
      t.string :logo, null: true
      t.string :banner, null: true
      t.string :color, null: true, comment: "Color theme of the school"
      t.string :timezone, default: "UTC", comment: "Timezone of the school, default is UTC"
      t.string :language, default: "en", comment: "Language of the school, default is English"
      t.datetime :discarded_at

      t.timestamps
    end
    add_index :education_schools, :discarded_at
  end
end
