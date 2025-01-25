json.data do
  json.array! @education_rooms do |education_room|
    json.extract! education_room, :id, :name, :created_at, :updated_at
    json.education_school education_room.education_school
  end
end

json.partial! "shared/common"
