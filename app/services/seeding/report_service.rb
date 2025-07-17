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
    self.report_owners
    self.report_reporters
    self.report_tickets
    self.report_category
    self.report_category_appointment
  end

  def self.report_owners
    User.where(education_role: :education_owner).find_each do |user|
      ReportOwner.create!(
        report_ownerable: user
      )
    end
  end

  def self.report_category
    ReportOwner.find_each do |report_owner|
      10.times do |n|
        ReportCategory.create!(
          name: "report category #{n}",
          parent_category: [report_owner.report_categories.sample, nil].sample,
          report_owner: report_owner
        )
      end
    end
  end

  def self.report_reporters
    User.where(education_role: :education_owner).find_each do |owner_user|
      owner_user.education_owner.education_staffs.each do |education_staff|
        ReportReporter.create!(
          report_owner: owner_user.report_owner,
          report_reporterable: education_staff,
          name: education_staff.name,
          email: education_staff.email,
          phone: Faker::PhoneNumber.cell_phone,
          nation: Faker::Address.country,
          description: Faker::Movie.quote,
          status: rand(0..3),
        )
      end
  end

  def self.report_tickets
    ReportOwner.all.each do |report_owner|
      report_ticket = ReportTicket.create!(
        report_owner: report_owner,
        report_reporter: report_owner.report_reporters.sample,
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