class RsUser < ApplicationRecord
  belongs_to :user
  has_many :rs_condos, dependent: :destroy
  has_many :rs_hotels, dependent: :destroy
end
