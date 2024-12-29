class AutoGenerator::EmailService
  def self.demo_email_with_roles(role: :normal, education_role: :school)
    case role.to_sym
    when :normal
      if User.normal.count.zero?
        email = "#{role}@application.com"
      else
        email = "#{role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@application.com"
      end
    when :admin
      if User.admin.count.zero?
        email = "#{role}@application.com"
      else
        email = "#{role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@application.com"
      end
    end

    if education_role
      case education_role.to_sym
      when :school
        if User.education_role_school.count.zero?
          email = "#{education_role}@education.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@education.com"
        end
      when :admin
        if User.education_role_admin.count.zero?
          email = "#{education_role}@education.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@education.com"
        end
      when :teacher
        if User.education_role_teacher.count.zero?
          email = "#{education_role}@education.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@education.com"
        end
      when :student
        if User.education_role_student.count.zero?
          email = "#{education_role}@education.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@education.com"
        end
      end
    end
    email
  end
end