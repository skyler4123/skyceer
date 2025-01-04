json.extract! education_exam, :id, :name, :description, :status, :education_school_id, :education_subject_id, :education_course_id, :discarded_at, :created_at, :updated_at
json.url education_exam_url(education_exam, format: :json)
