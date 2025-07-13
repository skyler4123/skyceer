json.extract! project_ticket, :id, :project_group_id, :name, :description, :status, :created_at, :updated_at
json.url project_ticket_url(project_ticket, format: :json)
