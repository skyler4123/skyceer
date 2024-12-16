class EmailService
  def self.username(email)
    email.split('@').first
  end

  def self.domain(email)
    email.split('@').last
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

  def self.demo_email_with_roles(role: :normal, education_role: :school)
    case role.to_sym
    when :normal
      if User.normal.count.zero?
        email = "#{role}@example.com"
      else
        email = "#{role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
      end
    when :admin
      if User.admin.count.zero?
        email = "#{role}@example.com"
      else
        email = "#{role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
      end
    end

    if education_role
      case education_role.to_sym
      when :school
        if User.education_role_school.count.zero?
          email = "#{education_role}@example.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
        end
      when :teacher
        if User.education_role_teacher.count.zero?
          email = "#{education_role}@example.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
        end
      when :student
        if User.education_role_student.count.zero?
          email = "#{education_role}@example.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
        end
      end
    end
    email
  end
end