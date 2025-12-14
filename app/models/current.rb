class Current < ActiveSupport::CurrentAttributes
  attribute :session
  attribute :user_agent, :ip_address

  delegate :user, to: :session, allow_nil: true

  def self.nosql_user
    user.nosql_user
  end

  def self.chat_user_id
    nosql_user.id
  end
end
