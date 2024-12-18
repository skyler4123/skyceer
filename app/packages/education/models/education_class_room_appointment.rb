class EducationClassRoomAppointment < ApplicationRecord
  belongs_to :education_class
  belongs_to :education_room
end
