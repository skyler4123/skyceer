json.extract! review_article, :id, :title, :body, :created_at, :updated_at
json.url review_article_url(review_article, format: :json)
