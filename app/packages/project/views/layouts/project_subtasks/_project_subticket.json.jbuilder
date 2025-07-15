json.extract! project_subtask, :id, :project_task_id, :name, :description, :status, :created_at, :updated_at
json.url project_subtask_url(project_subtask, format: :json)
