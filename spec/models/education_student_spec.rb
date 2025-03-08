require 'rails_helper'

RSpec.describe EducationStudent, type: :model do
  # Association tests
  it { should belong_to(:user).optional }
  it { should have_many(:education_classes) }
  it { should have_many(:education_school_appointments).dependent(:destroy) }
  it { should have_many(:education_schools).through(:education_school_appointments) }
  it { should have_many(:education_class_appointments).dependent(:destroy) }
  it { should have_many(:education_classes).through(:education_class_appointments) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }

end