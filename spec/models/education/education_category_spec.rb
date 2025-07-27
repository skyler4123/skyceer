require 'rails_helper'

RSpec.describe EducationCategory, type: :model do
  let(:user) { create(:user) }
  let(:parent_category) { create(:education_category) }
  let(:education_category) { build(:education_category, parent_category: parent_category) }

  describe 'associations' do
    it { should belong_to(:education_owner) }
    it { should belong_to(:parent_category).class_name('EducationCategory').optional }
    it { should have_many(:child_categories).class_name('EducationCategory').with_foreign_key('parent_category_id').dependent(:destroy) }
  end

  describe 'validations' do
    subject { build(:education_category) }
    it { should validate_presence_of(:name) }

    it do
      should validate_uniqueness_of(:name)
        .scoped_to(:education_owner_id)
        # .case_insensitive
        # .with_message("must be unique per user")
    end

    it do
      should validate_numericality_of(:nested_level)
        .only_integer
        .is_greater_than_or_equal_to(0)
    end
  end

  describe 'nested categories' do
    it 'allows creating subcategories' do
      subcategory = create(:education_category, parent_category: education_category)
      expect(subcategory.parent_category).to eq(education_category)
      expect(education_category.child_categories).to include(subcategory)
    end
  end
end
