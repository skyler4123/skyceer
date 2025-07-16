json.extract! payment_category, :id, :name, :payment_owner_id, :parent_category_id, :discarded_at, :created_at, :updated_at
json.url payment_category_url(payment_category, format: :json)
