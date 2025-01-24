json.data do
  json.array! @education_students do |education_student|
    json.extract! education_student, :id, :name
  end

  json.array! @education_exams do |education_exam|
    json.extract! education_exam, :id, :name
  end

  json.array! @education_exam_appointments do |education_exam_appointment|
    json.extract! education_exam_appointment, :id, :name
  end
end

json.partial! "shared/common"