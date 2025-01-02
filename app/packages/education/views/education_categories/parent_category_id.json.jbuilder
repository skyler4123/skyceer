json.array! @education_categories do |education_category|
  json.extract! education_category, :id, :name, :parent_category_id, :nested_level
end