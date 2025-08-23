class EmailService
  def self.username(email)
    email.split("@").first
  end

  def self.domain(email)
    email.split("@").last
  end

  def self.valid?(email)
    email.match?(URI::MailTo::EMAIL_REGEXP)
  end

  def self.normalize(email)
    email.strip.downcase
  end

  def self.generate_verification_token(email)
    User.generate_token(:email_verification, email)
  end

  def self.generate_password_reset_token(email)
    User.generate_token(:password_reset, email)
  end

  def self.send_verification_email(email)
    token = generate_verification_token(email)
    UserMailer.with(email: email, token: token).verification_email.deliver_later
  end

  def self.send_password_reset_email(email)
    token = generate_password_reset_token(email)
    UserMailer.with(email: email, token: token).password_reset_email.deliver_later
  end
end
