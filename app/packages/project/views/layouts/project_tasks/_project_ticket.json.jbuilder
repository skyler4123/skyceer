json.extract! project_task, :id, :project_group_id, :name, :description, :status, :created_at, :updated_at
json.url project_task_url(project_task, format: :json)
