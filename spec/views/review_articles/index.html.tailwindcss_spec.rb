require 'rails_helper'

RSpec.describe "review_articles/index", type: :view do
  before(:each) do
    assign(:review_articles, [
      ReviewArticle.create!(
        title: "Title",
        body: "Body"
      ),
      ReviewArticle.create!(
        title: "Title",
        body: "Body"
      )
    ])
  end

  it "renders a list of review_articles" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Title".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Body".to_s), count: 2
  end
end
