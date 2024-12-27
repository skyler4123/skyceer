json.extract! payment_order, :id, :seller, :buyer, :payment_method_id, :payment_discount_id, :status, :total, :paid, :due, :expire, :created_at, :updated_at
json.url payment_order_url(payment_order, format: :json)
