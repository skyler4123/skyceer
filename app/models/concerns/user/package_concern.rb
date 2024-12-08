module User::PackageConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :estate_houses, dependent: :destroy
    has_many :estate_condos, dependent: :destroy
    has_many :estate_hotels, dependent: :destroy

    has_many :vehicle_stores, dependent: :destroy
    has_many :vehicle_cars, dependent: :destroy

    has_one :education_school, dependent: :destroy
    has_many :education_teachers, dependent: :destroy
    has_many :education_students, dependent: :destroy

    has_many :calendar_groups, dependent: :destroy

    def education
      case self.education_role.to_sym
      when :school
        self.education_school
      when :teacher
        self.education_teacher
      when :student
        self.education_student
      end
    end

    def navigation_record
      return self.education_school if self.education_school
      self
    end
  end

end
