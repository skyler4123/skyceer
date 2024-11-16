module Current::PackageConcern
  extend ActiveSupport::Concern
  
  included do
    def self.education_school
      EducationSchool.find_by(user_id: Current.user_id)
    end
  end

end
