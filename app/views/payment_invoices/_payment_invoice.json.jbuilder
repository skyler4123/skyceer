json.extract! payment_invoice, :id, :payment_order_id, :transaction_id, :status, :due_date, :amount, :tax_code, :created_at, :updated_at
json.url payment_invoice_url(payment_invoice, format: :json)
