class CreateProjectSubtickets < ActiveRecord::Migration[8.0]
  def change
    create_table :project_subtickets, id: :uuid do |t|
      t.references :project_ticket, null: false, foreign_key: true, type: :uuid
      t.string :name
      t.string :description
      t.string :status

      t.timestamps
    end
  end
end
