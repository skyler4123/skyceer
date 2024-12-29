
class User < ApplicationRecord
  has_secure_password

  generates_token_for :email_verification, expires_in: 2.days do
    email
  end

  generates_token_for :password_reset, expires_in: 20.minutes do
    password_salt.last(10)
  end


  has_many :sessions, dependent: :destroy

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
  include User::ElasticsearchConcern
  include User::AvatarConcern
  include User::ImagesConcern
  include User::ImagesInArticlePostConcern
  include User::EnumConcern

  has_many :estate_houses, dependent: :destroy
  has_many :estate_condos, dependent: :destroy
  has_many :estate_hotels, dependent: :destroy

  has_many :vehicle_stores, dependent: :destroy
  has_many :vehicle_cars, dependent: :destroy
  has_many :calendar_groups, dependent: :destroy

  belongs_to :address, optional: true
  
  include User::EducationConcern
  include User::PaymentConcern
end
