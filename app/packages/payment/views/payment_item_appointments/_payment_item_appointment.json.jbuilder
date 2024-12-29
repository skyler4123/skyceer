json.extract! payment_item_appointment, :id, :payment_item_id, :payment_order_id, :item_quantity, :unit_price, :created_at, :updated_at
json.url payment_item_appointment_url(payment_item_appointment, format: :json)
