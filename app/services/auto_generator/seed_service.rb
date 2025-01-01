class AutoGenerator::SeedService
  def self.run(seed_number: 0)
    AutoGenerator::UserService.run
    self.seed_for_category
    
    AutoGenerator::EducationService.run
    # AutoGenerator::VehicleService.run
    # AutoGenerator::CalendarService.run
    # AutoGenerator::ChatService.run
    # AutoGenerator::ArticleService.run
    # AutoGenerator::EstateService.run
    # AutoGenerator::ReportService.run
    AutoGenerator::PaymentService.run
    
    self.puts_count
    puts "AutoGenerator::SeedService doneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!"
    return true
  end


  def self.seed_for_category
    20.times do |n|
      category = Category.create!(
        name: "category #{n}",
        parent_category: [Category.all.sample, nil].sample
      )
    end
  end

  def self.puts_count
    user_count = User.count
    category_count = Category.count
    calendar_group_count = CalendarGroup.count
    calendar_event_count = CalendarEvent.count

    education_category_count = EducationCategory.count
    education_school_count = EducationSchool.count
    education_class_count = EducationClass.count
    education_room_count = EducationRoom.count
    education_admin_count = EducationAdmin.count
    education_teacher_count = EducationTeacher.count
    education_student_count = EducationStudent.count

    chat_conversation_count = ChatConversation.count
    article_post_count = ArticlePost.count
    estate_condo_count = EstateCondo.count
    estate_hotel_count = EstateHotel.count
    estate_house_count = EstateHouse.count
    report_ticket_count = ReportTicket.count
    vehicle_store_count = VehicleStore.count
    vehicle_car_count = VehicleCar.count

    payment_user_count = PaymentUser.count
    payment_customer_count = PaymentCustomer.count
    payment_order_count = PaymentOrder.count
    payment_method_count = PaymentMethod.count
    payment_discount_count = PaymentDiscount.count
    payment_log_count = PaymentLog.count
    payment_item_count = PaymentItem.count
    payment_invoice_count = PaymentInvoice.count

    puts "Users: ", user_count
    puts "Categories: ", category_count
    puts "Calendar Groups: ", calendar_group_count
    puts "Calendar Events: ", calendar_event_count

    puts "Education Categories: ", education_category_count
    puts "Education Schools: ", education_school_count
    puts "Education Classes: ", education_class_count
    puts "Education Rooms: ", education_room_count
    puts "Education Admins: ", education_admin_count
    puts "Education Teachers: ", education_teacher_count
    puts "Education Students: ", education_student_count

    puts "Chat Conversations: ", chat_conversation_count
    puts "Article Posts: ", article_post_count
    puts "Estate Condos: ", estate_condo_count
    puts "Estate Hotels: ", estate_hotel_count
    puts "Estate Houses: ", estate_house_count
    puts "Report Tickets: ", report_ticket_count
    puts "Vehicle Stores: ", vehicle_store_count
    puts "Vehicle Cars: ", vehicle_car_count

    puts "Payment Users: ", payment_user_count
    puts "Payment Customers: ", payment_customer_count
    puts "Payment Orders: ", payment_order_count
    puts "Payment Methods: ", payment_method_count
    puts "Payment Discounts: ", payment_discount_count
    puts "Payment Logs: ", payment_log_count
    puts "Payment Items: ", payment_item_count
    puts "Payment Invoices: ", payment_invoice_count
  end
end
