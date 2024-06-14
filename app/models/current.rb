class Current < ActiveSupport::CurrentAttributes
  attribute :session
  attribute :user_agent, :ip_address

  delegate :user, to: :session, allow_nil: true

  def self.user_name
    self.session.name
  end

  def self.session_id
    self.session.id
  end

  def self.user_id
    self.session.user_id
  end

  def self.car_user
    CarUser.find_by(user_id: self.user_id)
  end

  def self.car_user_id
    self.car_user.id
  end

  def self.chat_user
    ChatUser.find_by(user_id: self.user_id)
  end

  def self.chat_user_id
    self.chat_user.id.to_s
  end

  def self.article_user
    ArticleUser.find_by(user_id: self.user_id)
  end

  def self.article_user_id
    self.article_user.id.to_s
  end

  def self.avatar
    self.session.avatar
  end
end
