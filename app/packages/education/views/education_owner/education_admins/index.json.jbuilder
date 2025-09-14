json.data do
  json.array! @education_admins
end

json.pagination do
  json.merge! @pagination
end

json.flash do
  json.merge! @flash
end
