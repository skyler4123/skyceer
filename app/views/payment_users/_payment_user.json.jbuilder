json.extract! payment_user, :id, :payment_userable_id, :payment_userable_type, :created_at, :updated_at
json.url payment_user_url(payment_user, format: :json)
