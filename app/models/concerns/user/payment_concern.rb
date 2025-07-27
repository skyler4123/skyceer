module User::PaymentConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :payment_owner, as: :payment_ownerable, dependent: :destroy
  end

end
