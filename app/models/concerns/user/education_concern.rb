module User::EducationConcern
  extend ActiveSupport::Concern
  
  included do
    EDUCATION_ROLE_DESCRIPTIONS = {
      education_school: 'School Owner',
      education_admin: 'School Admin',
      education_teacher: 'Teacher',
      education_student: 'Student',
      education_parent: 'Parent',
    }

    has_many :education_categories, dependent: :destroy
    has_many :education_schools, dependent: :destroy
    has_one :education_admin, dependent: :destroy
    has_one :education_teacher, dependent: :destroy
    has_one :education_student, dependent: :destroy
    has_one :education_parent, dependent: :destroy

    enum :education_role, {
      education_school: 1,
      education_admin: 2,
      education_teacher: 3,
      education_student: 4,
      education_parent: 5,
    }


    def is_education_user
      self.education_role.present?
    end

    # def get_education_teachers
    #   if self.education_role == 'education_school'
    #     return EducationTeacher.where(education_school_user: self)
    #   end
    #   self.education_teachers
    # end

    # def get_education_students
    #   if self.education_role == 'education_school'
    #     return EducationStudent.where(education_school_user: self)
    #   end
    #   self.education_students
    # end

    # def get_education_parents
    #   if self.education_role == 'education_school'
    #     return EducationParent.where(education_school_user: self)
    #   end
    #   self.education_parents
    # end

  end
end
