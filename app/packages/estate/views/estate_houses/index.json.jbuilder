json.array! @estate_houses do |estate_house|
  json.extract! estate_house, :id, :estate_user_id, :name, :address, :price_cents, :longitude, :latitude, :created_at, :updated_at
  json.image_urls estate_house.image_urls
end
