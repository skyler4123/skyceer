class CreateProjectCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :project_category_appointments, id: :uuid do |t|
      t.references :project_category, null: false, foreign_key: true, type: :uuid
      t.references :appoint_to, polymorphic: true, null: false, type: :uuid

      t.timestamps
    end
  end
end
