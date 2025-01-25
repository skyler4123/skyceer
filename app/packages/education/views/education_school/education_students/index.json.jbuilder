json.data do
  json.array! @education_students do |education_student|
    json.extract! education_student, :id, :name
    json.education_classes education_student.education_classes
    json.education_schools education_student.education_schools
  end
end

json.partial! "shared/common"
