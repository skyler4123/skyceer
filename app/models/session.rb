class Session < SessionApplicationRecord
  belongs_to :user
  belongs_to :vehicle_user

  before_create do
    self.user_agent = Current.user_agent
    self.ip_address = Current.ip_address
  end

  def self.chat_user_id(user_id:)
    Session.find_by(user_id: user_id)&.chat_user_id
  end
end
