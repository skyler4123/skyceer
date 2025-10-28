class Seeding::EmailService
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
      when :education_school
        if User.education_school.count.zero?
          email = "#{education_role}@example.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
        end
      when :education_admin
        if User.education_admin.count.zero?
          email = "#{education_role}@example.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
        end
      when :education_teacher
        if User.education_teacher.count.zero?
          email = "#{education_role}@example.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
        end
      when :education_student
        if User.education_student.count.zero?
          email = "#{education_role}@example.com"
        else
          email = "#{role}_#{education_role}_#{Time.now.to_i}_#{SecureRandom.hex(3)}@example.com"
        end
      end
    end
    email
  end
end
