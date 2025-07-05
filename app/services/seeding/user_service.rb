class Seeding::UserService
  def self.run
    User.roles.each do |key, value|
      self.create(role: key)
    end
    self.create_amonymous
  end

  def self.create(role: :normal, education_role: nil)
    user = User.create!(
      username: "#{Faker::Internet.unique.username(specifier: 5..20)}_#{SecureRandom.hex(3)}",
      email: Seeding::EmailService.demo_email_with_roles(role:, education_role:),
      password: "password1234",
      password_confirmation: "password1234",
      verified: true,
      name: Faker::Movies::HarryPotter.character,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      role: role,
      education_role: education_role,
      address: Address.create_random_vietnam,
    )
    Seeding::AttachmentService.attach(record: user, relation: :avatar_attachment, number: 1)
    user
  end

  def self.create_amonymous(role: :normal, education_role: nil)
    user = User.create!(
      username: AMONYMOUS_USERNAME,
      email: AMONYMOUS_EMAIL,
      password: "password1234",
      password_confirmation: "password1234",
      verified: true,
      name: "amonymous",
      first_name: "Amonymous",
      last_name: "User",
      role: role,
      education_role: education_role,
    )
    Seeding::AttachmentService.attach(record: user, relation: :avatar_attachment, number: 1)
    user
  end

  def self.amonymous
    user = User.find_by(email: AMONYMOUS_EMAIL)
    if user.nil?
      self.create_amonymous
    else
      user
    end
  end
end