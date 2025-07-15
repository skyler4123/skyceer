class CreateProjectOwners < ActiveRecord::Migration[8.0]
  def change
    create_table :project_owners, id: :uuid do |t|
      t.references :project_ownerable, polymorphic: true, null: false, type: :uuid
      t.string :name
      t.string :description
      t.string :status

      t.timestamps
    end
  end
end
