class AutoGenerator::UserService
  def self.run
    User.roles.each do |key, value|
      self.create(role: key)
    end
    self.create_amonymous
  end

  def self.create(role: :normal, education_role: nil)
    user = User.create!(
      email: AutoGenerator::EmailService.demo_email_with_roles(role:, education_role:),
      password: "password1234",
      password_confirmation: "password1234",
      verified: true,
      name: Faker::Movies::HarryPotter.character,
      role: role,
      education_role: education_role,
      address: Address.create_random_vietnam,
    )
    AutoGenerator::AttachmentService.attach(record: user, relation: :avatar, number: 1)
    user
  end

  def self.create_amonymous(role: :normal, education_role: nil)
    user = User.create!(
      email: AMONYMOUS_EMAIL,
      password: "password1234",
      password_confirmation: "password1234",
      verified: true,
      name: "amonymous",
      role: role,
      education_role: education_role,
    )
    AutoGenerator::AttachmentService.attach(record: user, relation: :avatar, number: 1)
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