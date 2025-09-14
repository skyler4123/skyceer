require 'rails_helper'

RSpec.describe 'External Service Connections - MOngoDB' do
  describe 'MongoDB Connection' do
    it 'connects to the MongoDB database successfully' do
      expect { Mongoid::Clients.default.database.name }.not_to raise_error
      expect(Mongoid::Clients.default.database.command(ping: 1).first['ok']).to eq(1.0)
      expect(Mongoid::Clients.default.database.name).to eq("skyceer_test")
    end
  end
end
