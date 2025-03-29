class Seeding::PaymentService
  def self.run
    self.payment_method
    self.payment_method_appointment
    self.payment_discount
    self.payment_order
    self.payment_item_appointment
    self.payment_invoice
    self.payment_log
    self.payment_category
    self.payment_category_appointment
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

  def self.payment_order
    PaymentItem.all.each do |payment_item|
      payment_user = payment_item.payment_user
      payment_customer = PaymentCustomer.all.sample
      payment_method = payment_user.payment_methods.sample
      payment_discount = payment_user.payment_discounts.sample
      PaymentOrder.create!(
        payment_user: payment_user,
        payment_customer: payment_customer,
        payment_method: payment_method,
        payment_discount: payment_discount,
        status: rand(0..3),
        amount: rand(1000..9999),
        paid: rand(1000..9999),
        due: rand(1000..9999),
        expire: Faker::Date.between(from: Date.today, to: 1.year.from_now)
      )
    end
  end
  
  def self.payment_item_appointment
    PaymentOrder.all.each do |payment_order|
      payment_user = payment_order.payment_user
      payment_item = payment_user.payment_items.sample
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
        amount: payment_order.amount,
        tax_code: Faker::Alphanumeric.alphanumeric(number: 6),
      )
    end
  end

  def self.payment_log
    PaymentInvoice.all.each do |payment_invoice|
      payment_order = payment_invoice.payment_order
      payment_user = payment_order.payment_user
      payment_customer = payment_order.payment_customer
      payment_method = payment_order.payment_method
      payment_discount = payment_order.payment_discount
      amount = payment_order.amount
      PaymentLog.create!(
        payment_user: payment_user,
        payment_customer: payment_customer,
        payment_order: payment_order,
        payment_method: payment_method,
        payment_discount: payment_discount,
        payment_invoice: payment_invoice,
        action: rand(0..3),
        amount: amount,
        note: Faker::Movie.quote
      )
    end
  end

  def self.payment_category
    PaymentUser.all.each do |payment_user|
      10.times do
        PaymentCategory.create!(
          payment_user: payment_user,
          name: "payment category name #{Faker::Movie.title}",
          parent_category: [PaymentCategory.all.sample, nil].sample,
        )
      end
    end
  end

  def self.payment_category_appointment
    PaymentUser.all.each do |payment_user|
      case payment_user.payment_userable_type
      when "EducationSchool"
        payment_categories = payment_user.payment_categories
        payment_customers = PaymentUser.where(payment_userable_type: "PaymentCustomer")

        payment_customers.sample(10).each do |payment_customer|
          PaymentCategoryAppointment.create!(
            payment_category: payment_categories.sample,
            appoint_to: payment_customer,
          )
        end

        payment_user.payment_orders.each do |payment_order|
          PaymentCategoryAppointment.create!(
            payment_category: payment_categories.sample,
            appoint_to: payment_order,
          )
        end


        payment_user.payment_items.each do |payment_item|
          PaymentCategoryAppointment.create!(
            payment_category: payment_categories.sample,
            appoint_to: payment_item,
          )
        end

        payment_user.payment_discounts.each do |payment_discount|
          PaymentCategoryAppointment.create!(
            payment_category: payment_categories.sample,
            appoint_to: payment_discount,
          )
        end

        payment_user.payment_methods.each do |payment_method|
          PaymentCategoryAppointment.create!(
            payment_category: payment_categories.sample,
            appoint_to: payment_method,
          )
        end
      end
    end
  end

end