require 'rails_helper'

RSpec.describe EducationAdmin, type: :model do
  # Association tests
  it { should belong_to(:user).optional }
  it { should have_many(:education_school_appointments).dependent(:destroy) }
  it { should have_many(:education_schools).through(:education_school_appointments) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }

  context 'when user is not set education_role yet' do
    subject { create(:education_admin, user: create(:user, education_role: nil)) }

    # callback run after record created: will set user education_role: :education_school
    it 'should set user education_role as :education_admin' do
      expect(subject.user.education_role).to eq('education_admin')
    end
  end
end