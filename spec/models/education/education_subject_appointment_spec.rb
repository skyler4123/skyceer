require 'rails_helper'

RSpec.describe EducationSubjectAppointment, type: :model do
  describe 'associations' do
    it { should belong_to(:education_subject) }
    it { should belong_to(:education_class) }
    it { should belong_to(:education_teacher) }
  end

  describe 'validations' do
    subject { build(:education_subject_appointment) }

    it { should validate_presence_of(:education_subject) }
    it { should validate_presence_of(:education_class) }
    it { should validate_presence_of(:education_teacher) }

    it 'validates uniqueness of subject-class-teacher combination' do
      education_subject = create(:education_subject)
      education_class = create(:education_class)
      education_teacher = create(:education_teacher)

      create(:education_subject_appointment, education_subject: education_subject, education_class: education_class, education_teacher: education_teacher)

      duplicate_appointment = build(:education_subject_appointment, education_subject: education_subject, education_class: education_class, education_teacher: education_teacher)
      expect(duplicate_appointment).not_to be_valid
      expect(duplicate_appointment.errors.full_messages).to include("Education subject A subject can only appoint one time to a class with a teacher")
    end
  end
end
