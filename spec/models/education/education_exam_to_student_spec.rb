require 'rails_helper'

RSpec.describe EducationExamToStudent, type: :model do
  describe 'associations' do
    it { should belong_to(:education_exam) }
    it { should belong_to(:education_student) }
    it { should belong_to(:education_exam_to_class) }
  end

  describe 'validations' do
    subject { build(:education_exam_to_student) }

    it { should validate_presence_of(:education_exam) }
    it { should validate_presence_of(:education_student) }
    it { should validate_presence_of(:education_exam_to_class) }

    # it 'validates uniqueness of exam-student combination within the same class' do
    #   education_exam = create(:education_exam)
    #   education_student = create(:education_student)
    #   education_exam_to_class = create(:education_exam_to_class)

    #   create(:education_exam_to_student, education_exam: education_exam, education_student: education_student, education_exam_to_class: education_exam_to_class)

    #   duplicate = build(:education_exam_to_student, education_exam: education_exam, education_student: education_student, education_exam_to_class: education_exam_to_class)
    #   expect(duplicate).not_to be_valid
    #   expect(duplicate.errors[:base]).to include("An exam can only be assigned once to a student within the same class")
    # end
  end
end
