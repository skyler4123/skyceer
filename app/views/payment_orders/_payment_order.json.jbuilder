json.extract! payment_order, :id, :payment_user_id, :payment_customer_id, :payment_method_id, :payment_discount_id, :status, :total, :paid, :due, :expire, :created_at, :updated_at
json.url payment_order_url(payment_order, format: :json)
