json.data do
  json.array! @education_exams do |education_exam|
    json.extract! education_exam, :id, :name, :created_at, :updated_at
    json.education_school education_exam.education_school
  end
end

json.partial! "shared/common"
