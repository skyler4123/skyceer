json.extract! education_lesson, :id, :title, :content, :education_school_id, :education_class_id, :education_subject_id, :education_teacher_id, :created_at, :updated_at
json.url education_lesson_url(education_lesson, format: :json)
