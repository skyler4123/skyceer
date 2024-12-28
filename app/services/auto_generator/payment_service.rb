class AutoGenerator::PaymentService
  def self.run
    self.payment_method
    self.payment_method_appointment
    self.payment_discount
    self.payment_discount_appointment
    self.payment_order
    self.payment_item_appointment
    # OK
    self.payment_invoice
    self.payment_log
  end

  def self.payment_customer
    PaymentCustomer.create!(
      user: User.all.sample,
    )
  end

  def self.payment_method
    10.times do
      PaymentMethod.create!(
        name: "payment method name #{Faker::Movie.title}",
        description: Faker::Movie.quote,
        region: rand(0..3),
      )
    end
  end

  def self.payment_method_appointment
    PaymentUser.all.each do |payment_user|
      PaymentMethodAppointment.create!(
        payment_user: payment_user,
        payment_method: PaymentMethod.all.sample
      )
    end
  end

  def self.payment_discount
    PaymentUser.all.each do |payment_user|
      PaymentDiscount.create!(
        payment_user: payment_user,
        name: "payment discount name #{Faker::Movie.title}",
        code: Faker::Alphanumeric.alphanumeric(number: 6),
        description: Faker::Movie.quote,
        expire: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        amount: rand(1000..9999),
        status: rand(0..3),
        kind: rand(0..3)
      )
    end
  end

  def self.payment_discount_appointment
    PaymentDiscount.all.each do |payment_discount|
      payment_user = payment_discount.payment_user
      PaymentDiscountAppointment.create!(
        payment_user: payment_user,
        payment_discount: payment_discount
      )
    end
  end
  def self.payment_order
    PaymentCustomer.all.each do |payment_customer|
      payment_user = PaymentUser.all.sample
      payment_method = payment_user.payment_methods.sample
      payment_discount = payment_user.payment_discounts.sample
      PaymentOrder.create!(
        payment_user: payment_user,
        payment_customer: payment_customer,
        payment_method: payment_method,
        payment_discount: payment_discount,
        status: rand(0..3),
        total: rand(1000..9999),
        paid: rand(1000..9999),
        due: rand(1000..9999),
        expire: Faker::Date.between(from: Date.today, to: 1.year.from_now)
      )
    end
  end
  
  def self.payment_item_appointment
    PaymentItem.all.each do |payment_item|
      payment_user = payment_item.payment_user
      payment_order = payment_user.payment_orders.sample
      PaymentItemAppointment.create!(
        payment_item: payment_item,
        payment_order: payment_order,
        item_quantity: rand(1..10),
        unit_price: rand(1000..9999)
      )
    end
  end

  def self.payment_invoice
    PaymentOrder.all.each do |payment_order|
      PaymentInvoice.create!(
        payment_order: payment_order,
        transaction_id: Faker::Alphanumeric.alphanumeric(number: 6),
        status: rand(0..3),
        due_date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        amount: payment_order.amount,
        tax_code: Faker::Alphanumeric.alphanumeric(number: 6),
      )
    end
  end

  def self.payment_log
    PaymentLog.create!(
      payment_user: PaymentUser.all.sample,
      payment_customer: PaymentCustomer.all.sample,
      payment_order: PaymentOrder.all.sample,
      payment_method: PaymentMethod.all.sample,
      payment_discount: PaymentDiscount.all.sample,
      payment_invoice: PaymentInvoice.all.sample,
      action: rand(0..3),
      amount: rand(1000..9999),
      note: Faker::Movie.quote
    )
  end

end