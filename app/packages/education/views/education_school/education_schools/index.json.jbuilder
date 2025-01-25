json.data do
  json.array! @education_schools do |education_school|
    json.extract! education_school, :id, :user_id, :address_id, :name, :category, :created_at, :updated_at
    json.url education_school_url(education_school, format: :json)
  end
end

json.partial! "shared/common"
