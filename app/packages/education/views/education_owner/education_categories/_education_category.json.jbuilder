json.extract! education_category, :id, :name, :parent_category_id, :nested_level
json.url education_category_url(education_category, format: :json)
