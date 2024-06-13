require 'rails_helper'

RSpec.describe "article_posts/new", type: :view do
  before(:each) do
    assign(:article_post, ArticlePost.new(
      title: "MyString",
      content: "MyString",
      article_user: nil
    ))
  end

  it "renders new article_post form" do
    render

    assert_select "form[action=?][method=?]", article_posts_path, "post" do

      assert_select "input[name=?]", "article_post[title]"

      assert_select "input[name=?]", "article_post[content]"

      assert_select "input[name=?]", "article_post[article_user_id]"
    end
  end
end
