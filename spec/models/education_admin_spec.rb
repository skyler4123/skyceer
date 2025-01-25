require 'rails_helper'

RSpec.describe EducationAdmin, type: :model do
  # Association tests
  it { should belong_to(:user).optional }
  it { should have_many(:education_school_appointments).dependent(:destroy) }
  it { should have_many(:education_schools).through(:education_school_appointments) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }

end