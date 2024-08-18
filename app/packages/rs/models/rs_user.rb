class RsUser < ApplicationRecord
  belongs_to :user
  has_many :rs_condos, dependent: :destroy
end
