require 'rails_helper'

RSpec.feature "Demo", type: :feature do
  it "will passed" do
    expect(true).to be_truthy
    # expect(true).to be_falsey
  end

  it "will failed" do
    expect(true).to be_falsey
  end
end
