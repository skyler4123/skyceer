require 'rails_helper'

RSpec.describe "review_comments/edit", type: :view do
  let(:review_comment) {
    ReviewComment.create!(
      body: "MyString"
    )
  }

  before(:each) do
    assign(:review_comment, review_comment)
  end

  it "renders the edit review_comment form" do
    render

    assert_select "form[action=?][method=?]", review_comment_path(review_comment), "post" do

      assert_select "input[name=?]", "review_comment[body]"
    end
  end
end
