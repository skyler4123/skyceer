require 'rails_helper'

RSpec.describe "article_comments/new", type: :view do
  before(:each) do
    assign(:article_comment, ArticleComment.new(
      review_user_id: "MyString",
      content: "MyString"
    ))
  end

  it "renders new article_comment form" do
    render

    assert_select "form[action=?][method=?]", article_comments_path, "post" do

      assert_select "input[name=?]", "article_comment[review_user_id]"

      assert_select "input[name=?]", "article_comment[content]"
    end
  end
end
