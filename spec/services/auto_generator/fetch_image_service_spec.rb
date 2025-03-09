require 'rails_helper'

RSpec.describe Seeding::FetchImageService, :vcr do
  describe '#run' do
    let!(:result) { described_class.run }
    
    it 'return file' do
      expect(result.class).to eq(Tempfile)
      expect(result.size).to be_an_instance_of(Integer)
      expect(result.size > 0).to be_truthy
    end
  end
end
