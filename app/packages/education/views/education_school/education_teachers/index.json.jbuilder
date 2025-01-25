json.data do
  json.array! @education_teachers do |education_teacher|
    json.extract! education_teacher, :id, :name, :created_at, :updated_at
    json.education_classes education_teacher.education_classes
    json.education_schools education_teacher.education_schools
  end
end

json.partial! "shared/common"
