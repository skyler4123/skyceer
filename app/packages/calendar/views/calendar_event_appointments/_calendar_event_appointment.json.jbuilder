json.extract! calendar_event_appointment, :id, :calendar_event_id, :calendar_event_appointmentable_id, :calendar_event_appointmentable_type, :discarded_at, :created_at, :updated_at
json.url calendar_event_appointment_url(calendar_event_appointment, format: :json)
