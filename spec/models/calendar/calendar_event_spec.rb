# spec/models/calendar_event_spec.rb
require 'rails_helper'

RSpec.describe CalendarEvent, type: :model do
  describe 'associations' do
    it { should belong_to(:calendar_owner) }
    it { should belong_to(:calendar_group) }
  end
end
