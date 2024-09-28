class User < ApplicationRecord
  has_secure_password

  generates_token_for :email_verification, expires_in: 2.days do
    email
  end
  generates_token_for :password_reset, expires_in: 20.minutes do
    password_salt.last(10)
  end

  has_one_attached :avatar do |attachable|
    attachable.variant :full_size, resize_to_limit: [100, 100]
    attachable.variant :thumb, resize_to_limit: [50, 50]
  end
  validate :acceptable_avatar

  has_many :sessions, dependent: :destroy
  has_one :calendar_user, dependent: :destroy
  has_one :education_user, dependent: :destroy
  has_one :agriculture_user, dependent: :destroy
  has_one :vehicle_user, dependent: :destroy
  has_one :estate_user, dependent: :destroy

  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, allow_nil: true, length: { minimum: 12 }

  normalizes :email, with: -> { _1.strip.downcase }

  before_validation if: :email_changed?, on: :update do
    self.verified = false
  end

  after_update if: :password_digest_previously_changed? do
    sessions.where.not(id: Current.session).delete_all
  end

  after_create :create_package_users
  after_update_commit do
    if avatar.attached? && (Time.now  > avatar.attachment.created_at)
      sessions.last.update(avatar: Rails.application.routes.url_helpers.rails_blob_path(avatar, only_path: true))
    end
  end

  def create_package_users
    VehicleUser.create(user_id: self.id)
    ChatUser.create(user_id: self.id)
    EnglishUser.create(user_id: self.id)
    ArticleUser.create(user_id: self.id)
    EstateUser.create(user_id: self.id)
  end

  def acceptable_avatar
    return unless avatar.attached?
    unless avatar.blob.byte_size <= 1.megabyte
      errors.add(:avatar, "is too big")
    end

    acceptable_types = ["image/jpeg", "image/png"]
    unless acceptable_types.include?(avatar.content_type)
      errors.add(:avatar, "must be a JPEG or PNG")
    end
  end

  include User::ElasticsearchConcern
end
