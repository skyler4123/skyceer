json.extract! article_post, :id, :title, :content, :article_user_id, :created_at, :updated_at
json.url article_post_url(article_post, format: :json)
