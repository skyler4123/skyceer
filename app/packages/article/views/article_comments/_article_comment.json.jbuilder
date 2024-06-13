json.extract! article_comment, :id, :review_user_id, :content, :created_at, :updated_at
json.url article_comment_url(article_comment, format: :json)
