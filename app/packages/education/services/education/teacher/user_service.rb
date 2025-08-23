class Education::Teacher::UserService
  def self.find_or_create(name:, email:)
    if User.exists?(email:)
      user = User.find_by(email:)
    else
      user = User.create!(
        email: email,
        password: "password1234",
        password_confirmation: "password1234",
        verified: false,
        name: name,
        role: :normal,
        education_role: :teacher,
      )
    end
    user
  end
end
