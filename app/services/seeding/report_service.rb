class Seeding::ReportService
  def self.run
    # User.all.each_with_index do |user, n|
    #   report_ticket = ReportTicket.create!(
    #     title: "report ticket title #{n}",
    #     content: Faker::Movie.quote,
    #     category: rand(0..3),
    #     status: rand(0..3),
    #     reporter_email: ["", user.email].sample
    #   )
    #   Seeding::AttachmentService.attach(record: report_ticket, relation: :image_attachments, number: 2)
    self.report_user
    self.report_ticket
    self.report_frontend
    self.report_category
    self.report_category_appointment
  end

  def self.report_user
    User.all.each do |user|
      ReportUser.create!(
        report_ownerable: user
      )
    end
  end

  def self.report_ticket
    ReportUser.all.each do |report_user|
      report_ticket = ReportTicket.create!(
        report_user: report_user,
        title: Faker::Movie.quote,
        content: Faker::Movie.quote,
        status: rand(0..3),
        email: Faker::Internet.email,
        nation: Faker::Address.country,
        phone: Faker::PhoneNumber.cell_phone
      )
      Seeding::AttachmentService.attach(record: report_ticket, relation: :image_attachments, number: 2)
    end
  end

  def self.report_frontend
    ReportUser.all.each do |report_user|
      ReportFrontend.create!(
        report_user: report_user,
        content: Faker::Movie.quote,
        url: Faker::Internet.url,
        cookie: { key: "value" },
        status: rand(0..3),
      )
    end
  end

  def self.report_category
    10.times do |n|
      ReportCategory.create!(
        name: "report category #{n}",
        parent_category: [ReportCategory.all.sample, nil].sample,
      )
    end
  end

  def self.report_category_appointment
    ReportTicket.all.each do |report_ticket|
      ReportCategoryAppointment.create!(
        appoint_to: report_ticket,
        report_category: ReportCategory.all.sample,
      )
    end
    ReportFrontend.all.each do |report_frontend|
      ReportCategoryAppointment.create!(
        appoint_to: report_frontend,
        report_category: ReportCategory.all.sample,
      )
    end
  end
end