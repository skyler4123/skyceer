require 'rails_helper'

RSpec.describe EducationStudent, type: :model do
  # Association tests
  it { should belong_to(:user).optional }
  it { should have_many(:education_classes) }
  it { should have_many(:education_schools) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }

  context 'when user is not set education_role yet' do
    subject { create(:education_student, user: create(:user, education_role: nil)) }

    # callback run after record created: will set user education_role: :education_school
    it 'should set user education_role as :education_student' do
      expect(subject.user.education_role).to eq('education_student')
    end
  end
end