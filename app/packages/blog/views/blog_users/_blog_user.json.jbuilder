json.extract! blog_user, :id, :nickname, :user_id, :created_at, :updated_at
json.url blog_user_url(blog_user, format: :json)
