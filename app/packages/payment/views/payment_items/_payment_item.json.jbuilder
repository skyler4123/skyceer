json.extract! payment_item, :id, :payment_user_id, :payment_itemable_id, :payment_itemable_type, :price, :created_at, :updated_at
json.url payment_item_url(payment_item, format: :json)
