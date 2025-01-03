class CreateEducationCategoryAppointments < ActiveRecord::Migration[8.0]
  def change
    create_table :education_category_appointments, id: :uuid do |t|
      t.references :education_category, null: false, foreign_key: true, type: :uuid
      t.references :education_category_appointmentable, polymorphic: true, null: false, type: :uuid, index: { name: 'index_education_category_appointments_on_education_category_app' }

      t.timestamps
    end
  end
end
