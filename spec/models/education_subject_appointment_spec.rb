require 'rails_helper'

RSpec.describe EducationSubjectAppointment, type: :model do
  let(:education_subject) { create(:education_subject) }
  let(:education_class) { create(:education_class) }
  let(:teacher) { create(:education_teacher) }

  it "allows unique subject-teacher-class combinations" do
    appointment1 = EducationSubjectAppointment.create!(education_subject: education_subject, education_class: education_class, education_teacher: teacher)
    appointment2 = EducationSubjectAppointment.new(education_subject: education_subject, education_class: education_class, education_teacher: create(:education_teacher))

    expect(appointment2).to be_valid
  end

  it "does not allow duplicate subject-teacher-class combinations" do
    appointment1 = EducationSubjectAppointment.create!(education_subject: education_subject, education_class: education_class, education_teacher: teacher)
    appointment2 = EducationSubjectAppointment.new(education_subject: education_subject, education_class: education_class, education_teacher: teacher)

    expect(appointment2).not_to be_valid
    expect(appointment2.errors[:base]).to include("A subject can only appoint one teacher to a class")
  end

  it "allows the same teacher to be assigned to different subjects or classes" do
    education_subject2 = create(:education_subject)
    education_class2 = create(:education_class)

    appointment1 = EducationSubjectAppointment.create!(education_subject: education_subject, education_class: education_class, education_teacher: teacher)
    appointment2 = EducationSubjectAppointment.new(education_subject: education_subject2, education_class: education_class2, education_teacher: teacher)

    expect(appointment2).to be_valid
  end
end
