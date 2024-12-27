json.extract! payment_customer, :id, :user_id, :created_at, :updated_at
json.url payment_customer_url(payment_customer, format: :json)
