
class User < ApplicationRecord
  include User::ElasticsearchConcern
  include User::AvatarConcern
  include User::PackageConcern
  include User::ArticlePostImageConcern
  include User::EnumConcern

  has_secure_password

  generates_token_for :email_verification, expires_in: 2.days do
    email
  end
  generates_token_for :password_reset, expires_in: 20.minutes do
    password_salt.last(10)
  end

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, allow_nil: true, length: { minimum: 12 }

  normalizes :email, with: -> { _1.strip.downcase }

  before_validation if: :email_changed?, on: :update do
    self.verified = false
  end

  after_update if: :password_digest_previously_changed? do
    sessions.where.not(id: Current.session).delete_all
  end

  # Customize the user model here

  belongs_to :address, optional: true
  has_many :sessions, dependent: :destroy

  def subdomain
    case education_role.to_sym
    when :normal
      nil
    when :admin
      :admin
    when :education_school
      :school
    when :education_teacher
      :teacher
    when :education_student
      :student
    else
      nil
    end
  end
end
