require 'rails_helper'

RSpec.describe EducationClass, type: :model do
  let(:education_school) { create(:education_school) }
  let(:education_course) { create(:education_course, education_school: education_school) }
  let(:education_class) { build(:education_class, education_school: education_school, education_course: education_course) }

  describe 'associations' do
    it { should belong_to(:education_school) }
    it { should belong_to(:education_course) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
  end
end
