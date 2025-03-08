require 'rails_helper'

RSpec.describe EducationSchool, type: :model do
  subject { create(:education_school) }

  # Association tests
  it { should belong_to(:user) }
  it { should have_many(:education_classes) }
  it { should have_many(:education_students) }
  it { should have_many(:education_teachers) }
  it { should have_one(:payment_user).dependent(:destroy) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }

  #  Callback tests
  it 'should create a new payment user for the school' do
    expect(subject.payment_user).to be_present
  end

end