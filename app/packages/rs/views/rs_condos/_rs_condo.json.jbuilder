json.extract! rs_condo, :id, :rs_user_id, :name, :address, :coordinates, :price_cents, :created_at, :updated_at
json.url rs_condo_url(rs_condo, format: :json)
