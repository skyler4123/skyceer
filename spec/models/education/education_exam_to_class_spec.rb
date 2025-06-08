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
    # it { should validate_presence_of(:name) }
    # it { should validate_presence_of(:description) }

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

    # it 'validates uniqueness of exam-class combination' do
    #   education_exam = create(:education_exam)
    #   education_class = create(:education_class)

    #   create(:education_exam_to_class, education_exam: education_exam, education_class: education_class)

    #   duplicate = build(:education_exam_to_class, education_exam: education_exam, education_class: education_class)
    #   expect(duplicate).not_to be_valid
    #   expect(duplicate.errors[:base]).to include("An exam can only be assigned once to a class")
    # end
  end

  describe 'soft delete' do
    let(:education_exam_to_class) { create(:education_exam_to_class) }

    it 'soft deletes a record' do
      education_exam_to_class.discard
      expect(education_exam_to_class.discarded?).to be true
      # expect(EducationExamToClass.all).not_to include(education_exam_to_class)
    end
  
    it 'restores a soft-deleted record' do
      education_exam_to_class.discard
      education_exam_to_class.undiscard
      expect(education_exam_to_class.discarded?).to be false
      expect(EducationExamToClass.all).to include(education_exam_to_class)
    end
  
    it 'queries only discarded records' do
      education_exam_to_class.discard
      expect(EducationExamToClass.discarded).to include(education_exam_to_class)
    end
  
    it 'queries all records including discarded ones' do
      education_exam_to_class.discard
      expect(EducationExamToClass.with_discarded).to include(education_exam_to_class)
    end
  end
end
