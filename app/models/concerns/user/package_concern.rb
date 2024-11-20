module User::PackageConcern
  extend ActiveSupport::Concern
  
  included do
    has_many :estate_houses, dependent: :destroy
    has_many :estate_condos, dependent: :destroy
    has_many :estate_hotels, dependent: :destroy

    has_many :vehicle_stores, dependent: :destroy
    has_many :vehicle_cars, dependent: :destroy

    has_many :education_schools, dependent: :destroy
    has_one :education_teacher, dependent: :destroy
    has_one :education_student, dependent: :destroy

    has_many :calendar_groups, dependent: :destroy
  end

end
