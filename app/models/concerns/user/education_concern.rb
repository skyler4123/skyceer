module User::EducationConcern
  extend ActiveSupport::Concern
  
  included do
    EDUCATION_ROLE_DESCRIPTIONS = {
      education_owner: 'School Owner',
      education_admin: 'School Admin',
      education_teacher: 'Teacher',
      education_student: 'Student',
      education_parent: 'Parent',
    }

    has_one :education_owner, as: :education_ownerable, dependent: :destroy
    has_one :education_admin, dependent: :destroy
    has_one :education_teacher, dependent: :destroy
    has_one :education_student, dependent: :destroy
    has_one :education_parent,  dependent: :destroy
    has_one :education_staff, dependent: :destroy

    enum :education_role, {
      education_owner: 0,
      education_admin: 1,
      education_teacher: 2,
      education_student: 3,
      education_parent: 4,
      education_staff: 5
    }

    def is_education_user
      self.education_role.present?
    end
  end
end
