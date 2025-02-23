module User::EducationConcern
  extend ActiveSupport::Concern
  
  included do
    EDUCATION_ROLE_DESCRIPTIONS = {
      education_school: 'School Ower',
      education_admin: 'School Admin',
      education_teacher: 'Teacher',
      education_student: 'Student'
    }

    has_many :education_schools, dependent: :destroy
    has_many :education_admins, dependent: :destroy
    has_many :education_teachers, dependent: :destroy
    has_many :education_students, dependent: :destroy

    enum :education_role, { education_school: 0, education_admin: 1, education_teacher: 2, education_student: 3 }

    after_create_commit :create_education_user_if_education_role_present

    def is_education_user
      self.education_role.present?
    end

    private

    def create_education_user_if_education_role_present
      return if self.education_role.blank?

      case self.education_role.to_sym
      when :education_school
        self.education_schools.create!(
          email: self.email,
          name: self.name,
          user: self,
        )
      when :education_admin
        self.education_admins.create!(
          email: self.email,
          name: self.name,
          user: self,
        )
      when :education_teacher
        self.education_teachers.create!(
          email: self.email,
          name: self.name,
          user: self,
        )
      when :education_student
        self.education_students.create!(
          email: self.email,
          name: self.name,
          user: self,
        )
      end
    end
  end

end
