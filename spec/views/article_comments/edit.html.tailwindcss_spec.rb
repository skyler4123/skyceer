require 'rails_helper'

RSpec.describe "article_comments/edit", type: :view do
  let(:article_comment) {
    ArticleComment.create!(
      review_user_id: "MyString",
      content: "MyString"
    )
  }

  before(:each) do
    assign(:article_comment, article_comment)
  end

  it "renders the edit article_comment form" do
    render

    assert_select "form[action=?][method=?]", article_comment_path(article_comment), "post" do

      assert_select "input[name=?]", "article_comment[review_user_id]"

      assert_select "input[name=?]", "article_comment[content]"
    end
  end
end
