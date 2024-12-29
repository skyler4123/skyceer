class EducationAdmin < ApplicationRecord
  include EducationAdmin::ImagesConcern

  belongs_to :user
  belongs_to :education_school
end
