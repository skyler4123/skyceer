json.array! @education_courses do |education_course|
  json.extract! education_course, :id, :name, :description, :education_school_id, :created_at, :updated_at
  json.url education_course_url(education_course, format: :json)
end
