json.data do
  json.array! @education_classes do |education_class|
    json.extract! education_class, :id, :name, :created_at, :updated_at
    json.education_school education_class.education_school
  end
end

json.partial! "shared/common"
