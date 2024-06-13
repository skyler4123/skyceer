require 'rails_helper'

RSpec.describe "article_comments/index", type: :view do
  before(:each) do
    assign(:article_comments, [
      ArticleComment.create!(
        review_user_id: "Review User",
        content: "Content"
      ),
      ArticleComment.create!(
        review_user_id: "Review User",
        content: "Content"
      )
    ])
  end

  it "renders a list of article_comments" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Review User".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Content".to_s), count: 2
  end
end
