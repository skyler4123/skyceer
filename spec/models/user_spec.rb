require 'rails_helper'

RSpec.describe User, type: :model do
  subject { create(:user) }
  describe 'validations' do
    it { should have_secure_password }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).ignoring_case_sensitivity }
  end

  describe 'enum' do
    it { should define_enum_for(:role).with_values(%i[normal admin]) }
    it { should define_enum_for(:education_role).with_values(%i[education_school education_teacher education_student]) }

    describe 'role' do
      context 'when role is normal' do
      end
      context 'when role is admin' do
      end
    end

    describe 'education_role' do
      context 'when education_role is education_school' do
      end
      context 'when education_role is education_teacher' do
      end
      context 'when education_role is education_student' do
      end
    end
  end
end
