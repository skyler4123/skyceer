json.extract! education_student, :id, :user_id, :name, :created_at, :updated_at
json.url education_student_url(education_student, format: :json)
json.school_name education_student.school_name
json.class_names education_student.class_names
