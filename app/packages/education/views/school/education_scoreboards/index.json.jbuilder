json.data do
  json.education_classes do
    json.array! @education_classes do |education_class|
      json.extract! education_class, :id, :name
    end
  end
  json.education_students do
    json.array! @education_students do |education_student|
      json.extract! education_student, :id, :name
    end
  end
  json.education_exams do
    json.array! @education_exams do |education_exam|
      json.extract! education_exam, :id, :name
    end
  end
  json.education_exam_appointments do
    json.array! @education_exam_appointments do |education_exam_appointment|
      json.extract! education_exam_appointment, :id, :education_exam_id, :education_exam_appointmentable_type, :education_exam_appointmentable_id, :score, :status
    end
  end
end

json.partial! "shared/common"