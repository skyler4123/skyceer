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

  #  Callback tests
  it 'should create a new payment user for the school' do
    expect(subject.payment_user).to be_present
  end

  context 'when user is not set education_role yet' do
    subject { create(:education_school, user: create(:user, education_role: nil)) }

    # callback run after record created: will set user education_role: :education_school
    it 'should set user education_role as :education_school' do
      expect(subject.user.education_role).to eq('education_school')
    end
  end
end