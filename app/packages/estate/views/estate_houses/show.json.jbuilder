json.extract! @estate_house, :id, :user_id, :name, :address, :price_cents, :created_at, :updated_at
json.image_urls @estate_house.image_urls
json.user @estate_house.user, :id, :email, :name
json.url estate_house_url(@estate_house)
