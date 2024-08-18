json.extract! rs_condo, :id, :rs_user_id, :name, :address, :price_cents, :longitude, :latitude, :created_at, :updated_at
json.url rs_condo_url(rs_condo, format: :json)
