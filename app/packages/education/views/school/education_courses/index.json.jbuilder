json.data do
  json.array! @education_courses do |education_course|
    json.extract! education_course, :id, :name, :created_at, :updated_at
    json.education_school education_course.education_school
  end
end

json.partial! "shared/common"
