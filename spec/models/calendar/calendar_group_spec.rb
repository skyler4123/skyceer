# spec/models/calendar_group_spec.rb
require 'rails_helper'

RSpec.describe CalendarGroup, type: :model do
  describe 'associations' do
    it { should belong_to(:calendar_owner) }
    it { should have_many(:calendar_events).dependent(:destroy) }
    it { should have_many(:calendar_category_appointments).dependent(:destroy) }
    it { should have_many(:calendar_categories).through(:calendar_category_appointments) }
  end

  describe 'validations' do
    subject { build(:calendar_group) }

    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name).scoped_to(:calendar_owner_id) }
    # it { should validate_inclusion_of(:status).in_array([0, 1, 2]) }
    # it { should validate_numericality_of(:position).is_greater_than_or_equal_to(0) }

    it 'validates color format' do
      should allow_value('#FF0000').for(:color)
      should allow_value('#abc123').for(:color)
      should_not allow_value('red').for(:color)
      should_not allow_value('#GGG').for(:color)
    end
  end

  # describe 'enums' do
  #   it { should define_enum_for(:status).with_values(active: 0, inactive: 1, archived: 2) }
  # end

  # describe 'scopes' do
  #   let(:calendar_owner) { create(:calendar_owner) }
  #   let!(:active_group) { create(:calendar_group, :active, calendar_owner: calendar_owner) }
  #   let!(:inactive_group) { create(:calendar_group, :inactive, calendar_owner: calendar_owner) }
  #   let!(:archived_group) { create(:calendar_group, :archived, calendar_owner: calendar_owner) }

  #   it 'returns active groups' do
  #     expect(CalendarGroup.active).to include(active_group)
  #     expect(CalendarGroup.active).not_to include(inactive_group, archived_group)
  #   end

  #   it 'orders by position' do
  #     group1 = create(:calendar_group, position: 2, calendar_owner: calendar_owner)
  #     group2 = create(:calendar_group, position: 1, calendar_owner: calendar_owner)

  #     expect(CalendarGroup.ordered).to eq([group2, group1])
  #   end
  # end
end
