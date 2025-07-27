class CreateProjectGroups < ActiveRecord::Migration[8.0]
  def change
    create_table :project_groups, id: :uuid do |t|
      t.references :project_owner, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :description
      t.string :status

      t.timestamps
    end
  end
end
