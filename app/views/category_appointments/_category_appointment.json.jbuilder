json.extract! category_appointment, :id, :category_id, :category_appointmentable_id, :category_appointmentable_type, :created_at, :updated_at
json.url category_appointment_url(category_appointment, format: :json)
