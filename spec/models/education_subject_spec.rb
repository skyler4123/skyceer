require 'rails_helper'

RSpec.describe EducationSubject, type: :model do
  let(:education_school) { create(:education_school) }
  let(:education_subject) { build(:education_subject, education_school: education_school) }

  describe 'associations' do
    it { should belong_to(:education_school) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:description) }
  end
end
