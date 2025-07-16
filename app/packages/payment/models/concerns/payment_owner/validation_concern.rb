module PaymentOwner::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :payment_ownerable, presence: true
    validate :payment_ownerable_must_have_education_role_school

    private
  
    def payment_ownerable_must_have_education_role_school
      if payment_ownerable.is_a?(User) && payment_ownerable.education_role != 'education_school'
        errors.add(:payment_ownerable, "must have an education role of 'education_school'")
      end
    end
  end

end
