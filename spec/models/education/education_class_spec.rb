require 'rails_helper'

RSpec.describe EducationClass, type: :model do
  describe 'associations' do
    it { should belong_to(:education_school) }
    it { should belong_to(:education_course) }
  end

  describe 'validations' do
    subject { build(:education_class) }

    it { should validate_presence_of(:name) }

    it do
      should validate_uniqueness_of(:name)
        .scoped_to(:education_school_id)
        .with_message("must be unique within the same school")
    end
  end
end
