class EducationStudent < ApplicationRecord
  belongs_to :education_user
  belongs_to :education_school, optional: true
  belongs_to :education_class, optional: true
end
