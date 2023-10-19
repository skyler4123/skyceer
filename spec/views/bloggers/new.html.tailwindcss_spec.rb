require 'rails_helper'

RSpec.describe "bloggers/new", type: :view do
  before(:each) do
    assign(:blogger, Blogger.new(
      nickname: "MyString",
      user_id: "MyString"
    ))
  end

  it "renders new blogger form" do
    render

    assert_select "form[action=?][method=?]", bloggers_path, "post" do

      assert_select "input[name=?]", "blogger[nickname]"

      assert_select "input[name=?]", "blogger[user_id]"
    end
  end
end
