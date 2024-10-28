json.extract! article_post, :id, :user_id, :title, :content, :created_at, :updated_at
json.url article_post_url(article_post, format: :json)
