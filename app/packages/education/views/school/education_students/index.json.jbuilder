json.data do
  json.array! @education_students do |education_student|
    json.extract! education_student, :id, :name
    json.url education_student_url(education_student, format: :json)
  end
end
json.pagination do
  json.last @pagy.last
  json.next @pagy.next
  json.page @pagy.page
  json.params request.params
  json.prev @pagy.prev
end

