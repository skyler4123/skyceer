class CategoryAppointment < ApplicationRecord
  belongs_to :category
  belongs_to :category_appointmentable, polymorphic: true
end
