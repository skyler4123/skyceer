require 'rails_helper'

RSpec.describe EducationAdmin, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    # it { should belong_to(:education_school_user).class_name('User') }
    # it { should have_many(:education_school_appointments).dependent(:destroy) }
    # it { should have_many(:education_schools).through(:education_school_appointments) }
  end

  describe 'validations' do
    subject { build(:education_admin) }

    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }

    # it do
    #   should validate_uniqueness_of(:name)
    #     .scoped_to(:education_school_user_id)
    #     .with_message("must be unique within the same school user")
    # end

    # it do
    #   should validate_uniqueness_of(:email)
    # end
  end
end
