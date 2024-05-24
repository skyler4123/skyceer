class Current < ActiveSupport::CurrentAttributes
  attribute :session
  attribute :user_agent, :ip_address

  delegate :user, to: :session, allow_nil: true

  def self.user_id
    self.session.user_id
  end

  def self.car_user
    CarUser.find_by(user_id: self.user_id)
  end
end
