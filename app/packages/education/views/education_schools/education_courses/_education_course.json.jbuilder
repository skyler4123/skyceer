json.extract! education_course, :id, :name, :description, :education_school_id, :education_category_id, :created_at, :updated_at
json.url education_course_url(education_course, format: :json)
