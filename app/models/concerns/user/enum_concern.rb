module User::EnumConcern
  extend ActiveSupport::Concern
  
  included do
    enum :role, {normal: 0, admin: 1, education_school: 10, education_teacher: 11, education_student: 12}
  end
end
