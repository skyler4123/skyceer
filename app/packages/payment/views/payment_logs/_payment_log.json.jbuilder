json.extract! payment_log, :id, :payment_owner_id, :payment_customer_id, :payment_order_id, :payment_method_id, :payment_discount_id, :payment_invoice_id, :action, :amount, :note, :created_at, :updated_at
json.url payment_log_url(payment_log, format: :json)
