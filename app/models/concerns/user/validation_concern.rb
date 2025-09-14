module User::ValidationConcern
  extend ActiveSupport::Concern

  included do
    # validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: URI::MailTo::EMAIL_REGEXP }
    # validates :first_name, presence: true
    # validates :last_name, presence: true
    # validates :password, presence: true, length: { minimum: 6 }, if: :password_required?

    # Custom validation to ensure email is not a disposable email address
    # validate :email_not_disposable
    validates :username, uniqueness: { case_sensitive: true }, length: { minimum: 3, maximum: 30 }, allow_blank: true
    validates :email, uniqueness: { case_sensitive: true }, format: { with: URI::MailTo::EMAIL_REGEXP }, allow_blank: true

    # Custom validation to ensure at least one of username or email is present
    validate :username_or_email_present

    private

    def username_or_email_present
      if username.blank? && email.blank?
        errors.add(:base, "Either username or email must be present")
      end
    end

    def password_required?
      new_record? || !password.nil? || !password_confirmation.nil?
    end

    def email_not_disposable
      if DisposableEmailChecker.disposable?(email)
        errors.add(:email, "is from a disposable email provider")
      end
    end
  end
end
