json.extract! report_ticket, :id, :report_owner_id, :title, :content, :status, :email, :phone, :nation, :discarded_at, :created_at, :updated_at
json.url report_ticket_url(report_ticket, format: :json)
