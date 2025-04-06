module PaymentUser::ValidationConcern
  extend ActiveSupport::Concern
  
  included do
    validates :payment_userable, presence: true
    validate :payment_userable_must_have_education_role_school

    private
  
    def payment_userable_must_have_education_role_school
      if payment_userable.is_a?(User) && payment_userable.education_role != 'education_school'
        errors.add(:payment_userable, "must have an education role of 'education_school'")
      end
    end
  end

end
