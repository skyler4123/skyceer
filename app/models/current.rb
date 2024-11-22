class Current < ActiveSupport::CurrentAttributes
  include Current::PackageConcern

  attribute :session
  attribute :user_agent, :ip_address

  delegate :user, to: :session, allow_nil: true

  def self.current_user
    self.session
  end

  def self.education_role
    self.session.education_role
  end

  def self.user_name
    self.session.name
  end

  def self.session_id
    self.session.id
  end

  def self.user_id
    self.session.user_id
  end

  def self.avatar
    self.session.avatar
  end
end
