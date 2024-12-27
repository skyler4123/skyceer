json.extract! payment_user, :id, :user_id, :created_at, :updated_at
json.url payment_user_url(payment_user, format: :json)
