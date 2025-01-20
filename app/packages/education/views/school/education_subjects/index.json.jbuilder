json.array! @education_subjects do |education_subject|
  json.extract! education_subject, :id, :name, :description, :education_school_id, :created_at, :updated_at
  json.url education_subject_url(education_subject, format: :json)
end
