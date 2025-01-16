json.array! @education_admins do |education_admin|
  json.extract! education_admin, :id, :user_id, :name, :created_at, :updated_at
  json.education_schools education_admin.education_schools
end
