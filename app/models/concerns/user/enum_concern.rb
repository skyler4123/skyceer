module User::EnumConcern
  extend ActiveSupport::Concern
  
  included do
    enum :role, { normal: 0, admin: 1 }
    enum :education_role, { school: 0, teacher: 1, student: 2 }, prefix: true
  end
end
