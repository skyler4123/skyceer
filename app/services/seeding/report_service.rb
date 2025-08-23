class Seeding::ReportService
  def self.run
    self.report_owners
    self.report_category
    self.report_reporters
    self.report_tickets
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
          parent_category: [ report_owner.report_categories.sample, nil ].sample,
          report_owner: report_owner
        )
      end
    end
  end

  def self.report_reporters
    ReportOwner.find_each do |report_owner|
      owner_user = report_owner.report_ownerable
      education_owner = owner_user.education_owner
      education_staffs = education_owner.education_staffs
      education_staffs.each do |education_staff|
        report_reporter = ReportReporter.create!(
          report_owner: report_owner,
          report_reporterable: education_staff,
          name: education_staff.name,
          email: education_staff.email,
          phone: Faker::PhoneNumber.phone_number,
          nation: Faker::Address.country,
          status: rand(0..3)
        )
        ReportCategoryAppointment.create!(
          report_category: report_owner.report_categories.sample,
          appoint_to: report_reporter
        )
      end
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
      ReportCategoryAppointment.create!(
        report_category: report_owner.report_categories.sample,
        appoint_to: report_ticket
      )
    end
  end
end
