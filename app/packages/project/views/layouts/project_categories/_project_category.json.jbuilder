json.extract! project_category, :id, :project_group_id, :name, :description, :created_at, :updated_at
json.url project_category_url(project_category, format: :json)
