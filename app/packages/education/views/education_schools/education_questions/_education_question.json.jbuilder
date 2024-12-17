json.extract! education_question, :id, :education_school_id, :education_teacher_id, :education_category_id, :question_type, :title, :content, :anwser, :choice_1, :choice_2, :choice_3, :choice_4, :created_at, :updated_at
json.url education_question_url(education_question, format: :json)
