json.extract! project_subticket, :id, :project_ticket_id, :name, :description, :status, :created_at, :updated_at
json.url project_subticket_url(project_subticket, format: :json)
