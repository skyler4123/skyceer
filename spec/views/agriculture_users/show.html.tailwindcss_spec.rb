require 'rails_helper'

RSpec.describe "agriculture_users/show", type: :view do
  before(:each) do
    assign(:agriculture_user, AgricultureUser.create!(
      user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
