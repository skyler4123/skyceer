class EducationClassAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :appoint_to, polymorphic: true

  validates :education_class_id, presence: true, uniqueness: { scope: [:appoint_to_id, :appoint_to_type] }
end
