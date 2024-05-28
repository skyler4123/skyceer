class Session < ApplicationRecord
  belongs_to :user
  belongs_to :car_user


  before_create do
    self.user_agent = Current.user_agent
    self.ip_address = Current.ip_address
  end
end
