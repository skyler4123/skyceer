module User::EnumConcern
  extend ActiveSupport::Concern
  
  included do
    enum :role, { normal: 0, admin: 1 }
    enum :education_role, { education_school: 0, education_teacher: 1, education_student: 2 }
  end
end
