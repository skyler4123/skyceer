class AutoGenerator::PaymentService
  def self.run
    5.times { self.payment_method }
    5.times { self.payment_discount }
    5.times { self.payment_order }
    5.times { self.payment_method_appointment }
    5.times { self.payment_item_appointment }
    5.times { self.payment_log }
  end

  def self.payment_method
    PaymentMethod.create!(
      name: "payment method name #{Faker::Movie.title}",
      description: Faker::Movie.quote,
      region: rand(0..3),
    )
  end

  def self.payment_discount
    publisher = PaymentUser.all.sample
    PaymentDiscount.create!(
      publisher: publisher,
      name: "payment discount name #{Faker::Movie.title}",
      code: Faker::Alphanumeric.alphanumeric(number: 6),
      description: Faker::Movie.quote,
      expire: Faker::Date.between(from: Date.today, to: 1.year.from_now),
      amount: rand(1000..9999),
      status: rand(0..3),
      kind: rand(0..3)
    )
  end

  def self.payment_order
    seller = PaymentUser.all.sample
    buyer = PaymentUser.all.sample
    payment_method = seller.payment_methods.sample
    payment_discount = seller.payment_discounts.sample
    PaymentOrder.create!(
      seller: seller,
      buyer: buyer,
      payment_method: payment_method,
      payment_discount: payment_discount,
      status: rand(0..3),
      total: rand(1000..9999),
      paid: rand(1000..9999),
      due: rand(1000..9999),
      expire: Faker::Date.between(from: Date.today, to: 1.year.from_now)
    )
  end

  def self.payment_method_appointment
    PaymentMethodAppointment.create!(
      payment_user: PaymentUser.all.sample,
      payment_method: PaymentMethod.all.sample
    )
  end
  
  def self.payment_item_appointment
    seller = PaymentUser.all.sample
    payment_order = seller.payment_orders.sample
    payment_item = seller.payment_items.sample
    PaymentItemAppointment.create!(
      payment_item: payment_item,
      payment_order: payment_order,
      item_quantity: rand(1..10),
      unit_price: rand(1000..9999)
    )
  end

  def self.payment_log
    PaymentLog.create!(
      seller: PaymentUser.all.sample,
      buyer: PaymentUser.all.sample,
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