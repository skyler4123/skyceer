json.extract! blog, :id, :content, :blogger_id, :created_at, :updated_at
json.url blog_url(blog, format: :json)
