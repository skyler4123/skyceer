require 'rails_helper'

RSpec.describe EducationExamAppointment, type: :model do
  let(:exam) { create(:education_exam) }
  let(:class1) { create(:education_class) }
  let(:student1) { create(:education_student) }

  it "allows unique appointments for different classes or students" do
    expect {
      EducationExamAppointment.create!(education_exam: exam, appoint_to: class1)
      EducationExamAppointment.create!(education_exam: exam, appoint_to: student1)
    }.not_to raise_error
  end

  it "does not allow duplicate appointments for the same class" do
    EducationExamAppointment.create!(education_exam: exam, appoint_to: class1)
    duplicate = EducationExamAppointment.new(education_exam: exam, appoint_to: class1)

    expect(duplicate).not_to be_valid
    expect(duplicate.errors[:education_exam_id]).to include("already has an appointment for this class or student")
  end

  it "does not allow duplicate appointments for the same student" do
    EducationExamAppointment.create!(education_exam: exam, appoint_to: student1)
    duplicate = EducationExamAppointment.new(education_exam: exam, appoint_to: student1)

    expect(duplicate).not_to be_valid
    expect(duplicate.errors[:education_exam_id]).to include("already has an appointment for this class or student")
  end
end
