module PaymentCustomer::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :payment_customerable, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
  end

end
