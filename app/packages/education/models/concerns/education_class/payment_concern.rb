module EducationClass::PaymentConcern
  extend ActiveSupport::Concern
  
  included do
    has_one :payment_item, as: :payment_itemable, dependent: :destroy

    after_create :create_payment_item

    private

    def create_payment_item
      PaymentItem.create!(payment_itemable: self, payment_owner: self.education_school.payment_owner)
    end
  end

end
