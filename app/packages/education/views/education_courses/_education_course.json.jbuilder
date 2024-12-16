json.extract! education_course, :id, :name, :duration, :datetime, :description, :contact, :email, :img_url, :education_id, :created_at, :updated_at
json.url education_course_url(education_course, format: :json)
