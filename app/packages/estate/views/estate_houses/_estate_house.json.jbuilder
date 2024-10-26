json.extract! estate_house, :id, :user_id, :name, :address, :price_cents, :created_at, :updated_at
json.image_urls estate_house.image_urls
json.session Session.find_by(user_id: estate_house.user_id), :email, :name, :chat_user_id
