require 'rails_helper'

RSpec.describe AutoGenerator::FetchImageService do
  describe '#run' do
    let!(:result) { described_class.run }
    
    it 'return file', :vcr do
      expect(result.class).to eq(Tempfile)
      expect(result.size).to be_an_instance_of(Numeric)
      expect(result.size > 0).to be_truthy
    end
  end
end
