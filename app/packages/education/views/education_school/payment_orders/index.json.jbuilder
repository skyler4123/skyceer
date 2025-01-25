json.data do
  json.array! @payment_orders do |payment_order|
    json.extract! payment_order, :id, :amount, :status, :created_at, :updated_at
    json.payment_userable payment_order.payment_user.payment_userable
    json.payment_customerable payment_order.payment_customer.payment_customerable
  end
end

json.partial! "shared/common"
