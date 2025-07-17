class Seeding::PaymentService
  def self.run
    self.payment_owners
    self.payment_categories
    self.payment_methods
    self.payment_method_appointments
    self.payment_customers
    self.payment_items
    self.payment_discounts
    self.payment_orders
    self.payment_item_appointments
    self.payment_invoices
    self.payment_logs
    self.payment_category_appointments
  end

  def self.payment_owners
    User.where(education_role: :education_owner).find_each do |user|
      PaymentOwner.create!(
        payment_ownerable: user,
        name: "Payment Owner for #{user.name}",
        description: "Payment Owner description for #{user.name}",
      )
    end
  end

  def self.payment_categories
    PaymentOwner.all.each do |payment_owner|
      10.times do
        PaymentCategory.create!(
          payment_owner: payment_owner,
          name: "payment category name #{Faker::Movie.title}",
          parent_category: [payment_owner.payment_categories.sample, nil].sample,
        )
      end
    end
  end

  def self.payment_methods
    10.times do
      PaymentMethod.create!(
        name: "payment method name #{Faker::Movie.title}",
        description: Faker::Movie.quote,
        region: rand(0..3),
      )
    end
  end

  def self.payment_method_appointments
    PaymentOwner.all.each do |payment_owner|
      PaymentMethodAppointment.create!(
        payment_owner: payment_owner,
        payment_method: PaymentMethod.all.sample
      )
    end
  end

  def self.payment_customers
    # For EDUCATION
    User.where(education_role: :education_owner).find_each do |owner_user|
      payment_owner = owner_user.payment_owner
      PaymentCustomer.create!(
        payment_owner: payment_owner,
        payment_customerable: owner_user,
        name: owner_user.name,
        email: owner_user.email,
        phone: Faker::PhoneNumber.phone_number,
        status: rand(0..3)
      )
    end
  end

  def self.payment_items
    # PaymentOwner.all.each do |payment_owner|
    #   10.times do
    #     PaymentItem.create!(
    #       payment_owner: payment_owner,
    #       name: "payment item name #{Faker::Movie.title}",
    #       code: Faker::Alphanumeric.alphanumeric(number: 6),
    #       description: Faker::Movie.quote,
    #       amount: rand(1000..9999),
    #       status: rand(0..3),
    #       kind: rand(0..3)
    #     )
    #   end
    # end
    # For EDUCATION
    User.where(education_role: :education_owner).find_each do |owner_user|
      payment_owner = owner_user.payment_owner
      10.times do
        PaymentItem.create!(
          payment_owner: payment_owner,
          name: "payment item name #{Faker::Movie.title}",
          code: Faker::Alphanumeric.alphanumeric(number: 6),
          description: Faker::Movie.quote,
          amount: rand(1000..9999),
          status: rand(0..3),
          kind: rand(0..3)
        )
      end
    end
  end

  def self.payment_discounts
    PaymentOwner.all.each do |payment_owner|
      PaymentDiscount.create!(
        payment_owner: payment_owner,
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

  def self.payment_orders
    PaymentItem.all.each do |payment_item|
      payment_owner = payment_item.payment_owner
      payment_customer = PaymentCustomer.all.sample
      payment_method = payment_owner.payment_methods.sample
      payment_discount = payment_owner.payment_discounts.sample
      PaymentOrder.create!(
        payment_owner: payment_owner,
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
  
  # def self.payment_item_appointments
  #   PaymentOrder.all.each do |payment_order|
  #     payment_owner = payment_order.payment_owner
  #     payment_item = payment_owner.payment_items.sample
  #     PaymentItemAppointment.create!(
  #       payment_item: payment_item,
  #       payment_order: payment_order,
  #       item_quantity: rand(1..10),
  #       unit_price: rand(1000..9999)
  #     )
  #   end
  # end

  # def self.payment_invoices
  #   PaymentOrder.all.each do |payment_order|
  #     PaymentInvoice.create!(
  #       payment_order: payment_order,
  #       transaction_id: Faker::Alphanumeric.alphanumeric(number: 6),
  #       status: rand(0..3),
  #       amount: payment_order.amount,
  #       tax_code: Faker::Alphanumeric.alphanumeric(number: 6),
  #     )
  #   end
  # end

  # def self.payment_logs
  #   PaymentInvoice.all.each do |payment_invoice|
  #     payment_order = payment_invoice.payment_order
  #     payment_owner = payment_order.payment_owner
  #     payment_customer = payment_order.payment_customer
  #     payment_method = payment_order.payment_method
  #     payment_discount = payment_order.payment_discount
  #     amount = payment_order.amount
  #     PaymentLog.create!(
  #       payment_owner: payment_owner,
  #       payment_customer: payment_customer,
  #       payment_order: payment_order,
  #       payment_method: payment_method,
  #       payment_discount: payment_discount,
  #       payment_invoice: payment_invoice,
  #       action: rand(0..3),
  #       amount: amount,
  #       note: Faker::Movie.quote
  #     )
  #   end
  # end

  # def self.payment_categories
  #   PaymentOwner.all.each do |payment_owner|
  #     10.times do
  #       PaymentCategory.create!(
  #         payment_owner: payment_owner,
  #         name: "payment category name #{Faker::Movie.title}",
  #         parent_category: [PaymentCategory.all.sample, nil].sample,
  #       )
  #     end
  #   end
  # end

  # def self.payment_category_appointments
  #   PaymentOwner.all.each do |payment_owner|
  #     case payment_owner.payment_ownerable_type
  #     when "EducationSchool"
  #       payment_categories = payment_owner.payment_categories
  #       payment_customers = PaymentOwner.where(payment_ownerable_type: "PaymentCustomer")

  #       payment_customers.sample(10).each do |payment_customer|
  #         PaymentCategoryAppointment.create!(
  #           payment_category: payment_categories.sample,
  #           appoint_to: payment_customer,
  #         )
  #       end

  #       payment_owner.payment_orders.each do |payment_order|
  #         PaymentCategoryAppointment.create!(
  #           payment_category: payment_categories.sample,
  #           appoint_to: payment_order,
  #         )
  #       end


  #       payment_owner.payment_items.each do |payment_item|
  #         PaymentCategoryAppointment.create!(
  #           payment_category: payment_categories.sample,
  #           appoint_to: payment_item,
  #         )
  #       end

  #       payment_owner.payment_discounts.each do |payment_discount|
  #         PaymentCategoryAppointment.create!(
  #           payment_category: payment_categories.sample,
  #           appoint_to: payment_discount,
  #         )
  #       end

  #       payment_owner.payment_methods.each do |payment_method|
  #         PaymentCategoryAppointment.create!(
  #           payment_category: payment_categories.sample,
  #           appoint_to: payment_method,
  #         )
  #       end
  #     end
  #   end
  # end

end