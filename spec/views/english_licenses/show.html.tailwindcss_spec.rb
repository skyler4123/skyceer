require 'rails_helper'

RSpec.describe "english_licenses/show", type: :view do
  before(:each) do
    assign(:english_license, EnglishLicense.create!(
      name: "Name",
      url: "Url"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Url/)
  end
end
