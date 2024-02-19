require 'rails_helper'

RSpec.describe "agriculture_farmers/show", type: :view do
  before(:each) do
    assign(:agriculture_farmer, AgricultureFarmer.create!(
      agriculture_user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
