require 'rails_helper'

RSpec.feature "Demo", type: :feature do
  it "will not be redirected" do
    expect(true).to be_truthy
    # expect(true).to be_falsey
  end
end
