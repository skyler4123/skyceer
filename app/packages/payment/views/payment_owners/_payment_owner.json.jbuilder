json.extract! payment_owner, :id, :payment_ownerable_id, :payment_ownerable_type, :created_at, :updated_at
json.url payment_owner_url(payment_owner, format: :json)
