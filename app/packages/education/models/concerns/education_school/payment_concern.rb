module EducationSchool::PaymentConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :payment_user, as: :payment_userable, dependent: :destroy
    
    after_create :create_payment_user

    private

    def create_payment_user
      PaymentUser.create!(payment_userable: self)
    end
  end

end
