require 'rails_helper'

RSpec.describe EducationParent, type: :model do
  let(:user) { create(:user) }
  let(:education_school_user) { create(:user, :education_school) }
  let(:education_parent) { build(:education_parent, user: user, education_school_user: education_school_user) }

  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:education_school_user).class_name('User') }
    it { should have_many(:education_school_appointments).dependent(:destroy) }
    it { should have_many(:education_schools).through(:education_school_appointments) }
    it { should have_many(:education_category_appointments).dependent(:destroy) }
    it { should have_many(:education_categories).through(:education_category_appointments) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
  end
end
