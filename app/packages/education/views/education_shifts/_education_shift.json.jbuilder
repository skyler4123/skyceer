json.extract! education_shift, :id, :title, :location, :start_time, :end_time, :duration, :education_school_id, :education_class_id, :education_subject_id, :education_teacher_id, :created_at, :updated_at
json.url education_shift_url(education_shift, format: :json)
