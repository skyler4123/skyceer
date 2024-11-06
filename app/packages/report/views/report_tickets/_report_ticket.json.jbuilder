json.extract! report_ticket, :id, :title, :content, :category, :status, :reporter_email, :created_at, :updated_at
json.url report_ticket_url(report_ticket, format: :json)
