json.extract! payment_discount, :id, :publisher_id, :publisher_type, :name, :description, :code, :expire, :amount, :status, :kind, :created_at, :updated_at
json.url payment_discount_url(payment_discount, format: :json)
