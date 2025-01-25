require 'rails_helper'

RSpec.describe EducationTeacher, type: :model do
  # Association tests
  it { should belong_to(:user).optional }
  it { should have_many(:education_schools) }
  it { should have_many(:education_classes) }

  # Validation tests
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
end