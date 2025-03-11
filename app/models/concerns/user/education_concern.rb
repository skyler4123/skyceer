module User::EducationConcern
  extend ActiveSupport::Concern
  
  included do
    EDUCATION_ROLE_DESCRIPTIONS = {
      education_school: 'School Ower',
      education_admin: 'School Admin',
      education_teacher: 'Teacher',
      education_student: 'Student',
      education_parent: 'Parent',
    }

    has_many :education_categories, dependent: :destroy
    has_many :education_schools, dependent: :destroy
    has_many :education_admins, dependent: :destroy, foreign_key: :education_school_user_id
    has_one :education_admin, dependent: :destroy
    has_many :education_teachers, dependent: :destroy
    has_many :education_students, dependent: :destroy
    has_many :education_parents, dependent: :destroy

    enum :education_role, { education_school: 0, education_admin: 1, education_teacher: 2, education_student: 3, education_parent: 4 }


    def is_education_user
      self.education_role.present?
    end

    def education_teachers
      if self.education_role == 'education_school'
        return EducationTeacher.where(education_school_user: self)
      end
      self.education_teachers
    end

    def education_students
      if self.education_role == 'education_school'
        return EducationStudent.where(education_school_user: self)
      end
      self.education_students
    end

    def education_parents
      if self.education_role == 'education_school'
        return EducationParent.where(education_school_user: self)
      end
      self.education_parents
    end
  end

end
