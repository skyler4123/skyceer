require 'rails_helper'

RSpec.describe PaymentCustomer, type: :model do
  describe 'associations' do
    it { should belong_to(:payment_customerable) }
  end

  describe 'validations' do
    subject { build(:payment_customer) }

    it do
      should allow_value("test@example.com").for(:email)
      should_not allow_value("invalid-email").for(:email).with_message("must be a valid email address")
    end
  end
end
