require 'rails_helper'

RSpec.describe EducationSchool, type: :model do
  subject { create(:user) }
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name).ignoring_case_sensitivity }

    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).ignoring_case_sensitivity }
  end

  describe 'enum' do
    it { should define_enum_for(:role).with_values(%i[normal admin]) }
    it { should define_enum_for(:education_role).with_values(%i[education_school education_teacher education_student]) }

  end
end
