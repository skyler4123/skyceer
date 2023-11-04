json.extract! blog, :id, :content, :blog_user_id, :created_at, :updated_at
json.url blog_url(blog, format: :json)
