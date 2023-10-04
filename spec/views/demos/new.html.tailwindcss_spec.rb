require 'rails_helper'

RSpec.describe "demos/new", type: :view do
  before(:each) do
    assign(:demo, Demo.new(
      content: "MyString"
    ))
  end

  it "renders new demo form" do
    render

    assert_select "form[action=?][method=?]", demos_path, "post" do

      assert_select "input[name=?]", "demo[content]"
    end
  end
end
