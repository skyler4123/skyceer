require 'rails_helper'

RSpec.describe EducationLesson, type: :model do
  let(:education_school) { create(:education_school) }
  let(:education_class) { create(:education_class, education_school: education_school) }
  let(:education_subject) { create(:education_subject, education_school: education_school) }
  let(:education_teacher) { create(:education_teacher, education_school: education_school) }
  let(:education_lesson) { build(:education_lesson, education_school: education_school, education_class: education_class, education_subject: education_subject, education_teacher: education_teacher) }

  describe 'associations' do
    it { should belong_to(:education_school) }
    it { should belong_to(:education_class).optional }
    it { should belong_to(:education_subject).optional }
    it { should belong_to(:education_teacher).optional }
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
    # it { should validate_presence_of(:content) }
  end
end
