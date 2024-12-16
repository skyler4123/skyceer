class AutoGenerator::ReportService
  def self.run
    User.all.each_with_index do |user, n|
      report_ticket = ReportTicket.create!(
        title: "report ticket title #{n}",
        content: Faker::Movie.quote,
        category: rand(0..3),
        status: rand(0..3),
        reporter_email: ["", user.email].sample
      )
      AutoGenerator::AttachmentService.attach(record: report_ticket, relation: :images, number: 2)
    end
  end
end