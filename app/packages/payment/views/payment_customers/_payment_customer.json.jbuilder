json.extract! payment_customer, :id, :payment_customerable_id, :payment_customerable_type, :created_at, :updated_at
json.url payment_customer_url(payment_customer, format: :json)
