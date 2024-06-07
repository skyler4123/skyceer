json.extract! review_user, :id, :user_id, :created_at, :updated_at
json.url review_user_url(review_user, format: :json)
