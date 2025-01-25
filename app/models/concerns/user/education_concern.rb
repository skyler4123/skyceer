module User::EducationConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :education_schools, dependent: :destroy
    has_many :education_admins, dependent: :destroy
    has_many :education_teachers, dependent: :destroy
    has_many :education_students, dependent: :destroy

    enum :education_role, { education_school: 0, education_admin: 1, education_teacher: 2, education_student: 3 }
  end

end
