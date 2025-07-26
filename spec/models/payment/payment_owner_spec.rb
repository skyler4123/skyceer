require 'rails_helper'

RSpec.describe PaymentOwner, type: :model do
  describe 'associations' do
    it { should belong_to(:payment_ownerable) }
    it { should have_many(:payment_method_appointments).dependent(:destroy) }
    it { should have_many(:payment_methods).through(:payment_method_appointments) }
    it { should have_many(:payment_discounts).dependent(:destroy) }
    it { should have_many(:payment_orders).dependent(:destroy) }
    it { should have_many(:payment_items).dependent(:destroy) }
    it { should have_many(:payment_logs).dependent(:destroy) }
    it { should have_many(:payment_categories).dependent(:destroy) }
  end

  describe 'validations' do
    subject { build(:payment_owner) }

    # it { should validate_presence_of(:payment_ownerable) }

    context 'when payment_ownerable is a User' do
      let(:user_with_invalid_role) { create(:user, education_role: 'education_student') }
      let(:user_without_school) { create(:user, education_role: 'education_school') }

      # it 'is valid if the user has an education role of "education_school" and at least one education school' do
      #   payment_owner = build(:payment_owner, payment_ownerable: user_with_school_role)
      #   expect(payment_owner).to be_valid
      # end

      # it 'is invalid if the user does not have an education role of "education_school"' do
      #   payment_owner = build(:payment_owner, payment_ownerable: user_with_invalid_role)
      #   expect(payment_owner).not_to be_valid
      #   expect(payment_owner.errors[:payment_ownerable]).to include("must have an education role of 'education_school'")
      # end
    end
  end
end