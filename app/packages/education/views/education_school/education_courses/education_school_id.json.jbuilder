json.array! @education_courses do |education_course|
  json.extract! education_course, :id, :name
end