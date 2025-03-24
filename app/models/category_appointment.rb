class CategoryAppointment < ApplicationRecord
  belongs_to :category
  belongs_to :appoint_to, polymorphic: true
end
