require 'rails_helper'

RSpec.describe EducationExam, type: :model do
  let(:education_school) { create(:education_school) }
  let(:education_subject) { create(:education_subject, education_school: education_school) }
  let(:education_exam) { build(:education_exam, education_school: education_school, education_subject: education_subject) }

  describe 'associations' do
    it { should belong_to(:education_school) }
    it { should belong_to(:education_subject) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    # it { should validate_presence_of(:status) }
  end

end
