require 'rails_helper'

RSpec.describe "article_posts/index", type: :view do
  before(:each) do
    assign(:article_posts, [
      ArticlePost.create!(
        title: "Title",
        content: "Content",
        article_user: nil
      ),
      ArticlePost.create!(
        title: "Title",
        content: "Content",
        article_user: nil
      )
    ])
  end

  it "renders a list of article_posts" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Content".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
