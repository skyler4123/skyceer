require 'rails_helper'

RSpec.describe "demos/edit", type: :view do
  let(:demo) {
    Demo.create!(
      string: "MyString",
      text: "MyText",
      float: 1.5,
      decimal: "9.99",
      binary: "",
      boolean: false,
      json: ""
    )
  }

  before(:each) do
    assign(:demo, demo)
  end

  it "renders the edit demo form" do
    render

    assert_select "form[action=?][method=?]", demo_path(demo), "post" do

      assert_select "input[name=?]", "demo[string]"

      assert_select "textarea[name=?]", "demo[text]"

      assert_select "input[name=?]", "demo[float]"

      assert_select "input[name=?]", "demo[decimal]"

      assert_select "input[name=?]", "demo[binary]"

      assert_select "input[name=?]", "demo[boolean]"

      assert_select "input[name=?]", "demo[json]"
    end
  end
end
