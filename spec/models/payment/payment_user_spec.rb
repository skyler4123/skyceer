require 'rails_helper'

RSpec.describe PaymentUser, type: :model do
  describe 'associations' do
    it { should belong_to(:payment_userable) }
    it { should have_many(:payment_method_appointments).dependent(:destroy) }
    it { should have_many(:payment_methods).through(:payment_method_appointments) }
    it { should have_many(:payment_discounts).dependent(:destroy) }
    it { should have_many(:payment_orders).dependent(:destroy) }
    it { should have_many(:payment_items).dependent(:destroy) }
    it { should have_many(:payment_logs).dependent(:destroy) }
    it { should have_many(:payment_categories).dependent(:destroy) }
  end

  describe 'validations' do
    subject { build(:payment_user) }

    it { should validate_presence_of(:payment_userable) }

    context 'when payment_userable is a User' do
      let(:user_with_school_role) { create(:user, :with_education_school, education_role: 'education_school') }
      let(:user_with_invalid_role) { create(:user, education_role: 'education_student') }
      let(:user_without_school) { create(:user, education_role: 'education_school') }

      it 'is valid if the user has an education role of "education_school" and at least one education school' do
        payment_user = build(:payment_user, payment_userable: user_with_school_role)
        expect(payment_user).to be_valid
      end

      it 'is invalid if the user does not have an education role of "education_school"' do
        payment_user = build(:payment_user, payment_userable: user_with_invalid_role)
        expect(payment_user).not_to be_valid
        expect(payment_user.errors[:payment_userable]).to include("must have an education role of 'education_school'")
      end
    end
  end
end