require 'rails_helper'

RSpec.describe EducationRoom, type: :model do
  let(:education_school) { create(:education_school) }
  let(:education_room) { build(:education_room, education_school: education_school) }

  describe 'associations' do
    it { should belong_to(:education_school) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
  end

end