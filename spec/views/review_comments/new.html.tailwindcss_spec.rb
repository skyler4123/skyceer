require 'rails_helper'

RSpec.describe "review_comments/new", type: :view do
  before(:each) do
    assign(:review_comment, ReviewComment.new(
      body: "MyString"
    ))
  end

  it "renders new review_comment form" do
    render

    assert_select "form[action=?][method=?]", review_comments_path, "post" do

      assert_select "input[name=?]", "review_comment[body]"
    end
  end
end
