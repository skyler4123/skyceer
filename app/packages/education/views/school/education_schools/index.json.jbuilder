json.data do
  json.array! @education_schools do |education_school|
    json.extract! education_school, :id, :user_id, :address_id, :name, :category, :created_at, :updated_at
    json.url education_school_url(education_school, format: :json)
  end
end
json.pagination do
  json.last @pagy.last
  json.next @pagy.next
  json.page @pagy.page
  json.params request.params
  json.prev @pagy.prev
end

