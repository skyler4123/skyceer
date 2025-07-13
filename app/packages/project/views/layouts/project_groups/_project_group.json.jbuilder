json.extract! project_group, :id, :project_ownerable_id, :project_ownerable_type, :name, :description, :status, :created_at, :updated_at
json.url project_group_url(project_group, format: :json)
