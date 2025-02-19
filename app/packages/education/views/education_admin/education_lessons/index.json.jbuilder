json.data do
  json.array! @education_lessons do |education_lesson|
    json.extract! education_lesson, :id, :name, :created_at, :updated_at
    json.education_school education_lesson.education_school
  end
end

json.partial! "shared/common"
