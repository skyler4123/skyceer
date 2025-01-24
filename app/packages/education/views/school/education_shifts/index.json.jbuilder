json.data do
  json.array! @education_shifts do |education_shift|
    json.extract! education_shift, :id, :name, :created_at, :updated_at
    json.education_school education_shift.education_school
  end
end

json.partial! "shared/common"
