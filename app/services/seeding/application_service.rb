class Seeding::ApplicationService
  def self.run
    self.user
    self.category
    self.category_appointment
  end

  def self.user
    Seeding::UserService.run
  end

  def self.category
    20.times do |n|
      category = Category.create!(
        name: "category #{n}",
        parent_category: [Category.all.sample, nil].sample
      )
    end
  end

  def self.category_appointment
    Address.all.each do |address|
      CategoryAppointment.create!(
        category: Category.all.sample,
        category_appointmentable: address
      )
    end
  end

end
