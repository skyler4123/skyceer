module User::PaymentConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :payment_user, dependent: :destroy
    has_one :payment_customer, dependent: :destroy
    
    after_create :create_payment_user

    private

    def create_payment_user
      PaymentUser.create!(payment_userable: self)
    end
  end

end
