module User::EducationConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :education_schools, dependent: :destroy
    has_many :education_admins, dependent: :destroy
    has_many :education_teachers, dependent: :destroy
    has_many :education_students, dependent: :destroy

    enum :education_role, { school: 0, admin: 1, teacher: 2, student: 3 }, prefix: true

    # check if user is education user
    def is_education_user
      self.education_role.present?
    end
  end

end
