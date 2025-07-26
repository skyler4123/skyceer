# spec/models/calendar_owner_spec.rb
require 'rails_helper'

RSpec.describe CalendarOwner, type: :model do
  describe 'associations' do
    it { should belong_to(:calendar_ownerable) }
    it { should have_many(:calendar_groups).dependent(:destroy) }
    it { should have_many(:calendar_events).dependent(:destroy) }
    it { should have_many(:calendar_categories).dependent(:destroy) }
  end

  describe 'validations' do
    subject { build(:calendar_owner) }
    
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email).scoped_to(:calendar_ownerable_type, :calendar_ownerable_id) }
    it { should validate_uniqueness_of(:uid).allow_blank }
    
    it 'validates email format' do
      should allow_value('test@example.com').for(:email)
      should allow_value('user+tag@domain.co.uk').for(:email)
      should_not allow_value('invalid-email').for(:email)
      should_not allow_value('test@').for(:email)
    end
  end

  # describe 'scopes' do
  #   let!(:active_owner) { create(:calendar_owner) }
  #   let!(:discarded_owner) { create(:calendar_owner, :discarded) }

  #   it 'includes active owners by default' do
  #     expect(CalendarOwner.all).to include(active_owner)
  #     expect(CalendarOwner.all).not_to include(discarded_owner)
  #   end

  #   it 'can include discarded owners' do
  #     expect(CalendarOwner.with_discarded).to include(active_owner, discarded_owner)
  #   end
  # end

  # describe 'soft delete' do
  #   let(:calendar_owner) { create(:calendar_owner) }

  #   it 'soft deletes the record' do
  #     expect { calendar_owner.discard! }.to change { calendar_owner.reload.discarded? }.from(false).to(true)
  #   end

  #   it 'can be undiscarded' do
  #     calendar_owner.discard!
  #     expect { calendar_owner.undiscard! }.to change { calendar_owner.reload.discarded? }.from(true).to(false)
  #   end
  # end
end