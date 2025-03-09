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
    it { should define_enum_for(:education_role).with_values(%i[education_school education_admin education_teacher education_student education_parent]) }
  end

  describe 'associations' do
    it { should have_many(:sessions).dependent(:destroy) }
    it { should belong_to(:address).optional }
    it { should have_many(:education_schools).dependent(:destroy) }
    it { should have_many(:education_admins).dependent(:destroy) }
    it { should have_many(:education_teachers).dependent(:destroy) }
    it { should have_many(:education_students).dependent(:destroy) }
    it { should have_one(:report_user).dependent(:destroy) }
  end

  describe 'callbacks' do
    context "create nosql_user after create user" do
      it 'should create a new nosql+user for the user' do
        expect(subject.nosql_user).to be_present
      end
    end
  end
end
