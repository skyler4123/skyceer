json.extract! education_exam, :id, :name, :description, :score, :status, :education_school_id, :education_subject_id, :education_student_id, :education_category_id, :education_course_id, :created_at, :updated_at
json.url education_exam_url(education_exam, format: :json)
