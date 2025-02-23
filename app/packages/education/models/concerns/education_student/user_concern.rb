module EducationStudent::UserConcern
  extend ActiveSupport::Concern
  
  included do
    after_create_commit :set_user_education_role

    private

    def set_user_education_role
      user.update(education_role: :education_student)
    end
  end

end
