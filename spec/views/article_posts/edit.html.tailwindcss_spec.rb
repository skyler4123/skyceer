require 'rails_helper'

RSpec.describe "article_posts/edit", type: :view do
  let(:article_post) {
    ArticlePost.create!(
      title: "MyString",
      content: "MyString",
      article_user: nil
    )
  }

  before(:each) do
    assign(:article_post, article_post)
  end

  it "renders the edit article_post form" do
    render

    assert_select "form[action=?][method=?]", article_post_path(article_post), "post" do

      assert_select "input[name=?]", "article_post[title]"

      assert_select "input[name=?]", "article_post[content]"

      assert_select "input[name=?]", "article_post[article_user_id]"
    end
  end
end
