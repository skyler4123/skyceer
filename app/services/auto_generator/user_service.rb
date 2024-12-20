class AutoGenerator::UserService
  def self.create(role: :normal, education_role: nil)
    user = User.create!(
      email: EmailService.demo_email_with_roles(role:, education_role:),
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

  def self.run
    User.roles.each do |key, value|
      self.create(role: key)
    end
  end
end