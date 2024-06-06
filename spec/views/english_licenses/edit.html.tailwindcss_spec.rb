require 'rails_helper'

RSpec.describe "english_licenses/edit", type: :view do
  let(:english_license) {
    EnglishLicense.create!(
      name: "MyString",
      url: "MyString"
    )
  }

  before(:each) do
    assign(:english_license, english_license)
  end

  it "renders the edit english_license form" do
    render

    assert_select "form[action=?][method=?]", english_license_path(english_license), "post" do

      assert_select "input[name=?]", "english_license[name]"

      assert_select "input[name=?]", "english_license[url]"
    end
  end
end
