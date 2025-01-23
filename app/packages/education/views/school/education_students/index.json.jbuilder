json.data do
  json.array! @education_students do |education_student|
    json.extract! education_student, :id, :name
    json.url education_student_url(education_student, format: :json)
  end
end

json.partial! "shared/common"
