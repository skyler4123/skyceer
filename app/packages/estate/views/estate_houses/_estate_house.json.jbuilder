json.extract! estate_house, :id, :estate_user_id, :name, :address, :price_cents, :longitude, :latitude, :created_at, :updated_at
json.image_urls estate_house.image_urls
json.session Session.find_by(estate_user_id: estate_house.estate_user_id), :email, :name, :chat_user_id
