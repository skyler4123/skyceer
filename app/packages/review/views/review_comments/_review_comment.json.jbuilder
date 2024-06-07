json.extract! review_comment, :id, :body, :created_at, :updated_at
json.url review_comment_url(review_comment, format: :json)
