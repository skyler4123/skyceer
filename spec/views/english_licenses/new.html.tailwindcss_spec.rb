require 'rails_helper'

RSpec.describe "english_licenses/new", type: :view do
  before(:each) do
    assign(:english_license, EnglishLicense.new(
      name: "MyString",
      url: "MyString"
    ))
  end

  it "renders new english_license form" do
    render

    assert_select "form[action=?][method=?]", english_licenses_path, "post" do

      assert_select "input[name=?]", "english_license[name]"

      assert_select "input[name=?]", "english_license[url]"
    end
  end
end
