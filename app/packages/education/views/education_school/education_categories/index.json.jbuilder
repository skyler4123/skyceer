json.data do
  json.array! @education_categories do |education_category|
    json.extract! education_category, :id, :name, :created_at, :updated_at
    json.education_school education_category.education_school
  end
end

json.partial! "shared/common"
