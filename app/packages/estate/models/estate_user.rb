class EstateUser < ApplicationRecord
  belongs_to :user
  has_many :estate_condos, dependent: :destroy
  has_many :estate_hotels, dependent: :destroy
  has_many :estate_homes, dependent: :destroy
end
