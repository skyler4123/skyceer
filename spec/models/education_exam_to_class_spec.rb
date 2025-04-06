require 'rails_helper'

RSpec.describe EducationExamToClass, type: :model do
  describe 'associations' do
    it { should belong_to(:education_exam) }
    it { should belong_to(:education_class) }
  end

  describe 'validations' do
    subject { build(:education_exam_to_class) }

    it { should validate_presence_of(:education_exam) }
    it { should validate_presence_of(:education_class) }
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:description) }

    it do
      should validate_numericality_of(:score)
        .is_greater_than_or_equal_to(0)
        .allow_nil
    end

    it do
      should validate_numericality_of(:status)
        .only_integer
        .allow_nil
    end

    it 'validates uniqueness of exam-class combination' do
      education_exam = create(:education_exam)
      education_class = create(:education_class)

      create(:education_exam_to_class, education_exam: education_exam, education_class: education_class)

      duplicate = build(:education_exam_to_class, education_exam: education_exam, education_class: education_class)
      expect(duplicate).not_to be_valid
      expect(duplicate.errors[:base]).to include("An exam can only be assigned once to a class")
    end
  end
end
