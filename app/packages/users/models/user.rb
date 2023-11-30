class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true

  has_one_attached :avatar do |attachable|
    attachable.variant :thumb, resize_to_limit: [150, 150]
    attachable.variant :small, resize_to_limit: [300, 300]
    attachable.variant :medium, resize_to_limit: [500, 500]
    attachable.variant :large, resize_to_limit: [1000, 1000]
  end
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
end
