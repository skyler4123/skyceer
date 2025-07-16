module EducationSchool::PaymentConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :payment_owner, as: :payment_ownerable, dependent: :destroy
    
    after_create :create_payment_owner

    private

    def create_payment_owner
      PaymentOwner.create!(payment_ownerable: self)
    end
  end

end
