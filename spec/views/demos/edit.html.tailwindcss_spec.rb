require 'rails_helper'

RSpec.describe "demos/edit", type: :view do
  let(:demo) {
    Demo.create!(
      content: "MyString"
    )
  }

  before(:each) do
    assign(:demo, demo)
  end

  it "renders the edit demo form" do
    render

    assert_select "form[action=?][method=?]", demo_path(demo), "post" do

      assert_select "input[name=?]", "demo[content]"
    end
  end
end
