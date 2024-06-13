require 'rails_helper'

RSpec.describe "article_comments/show", type: :view do
  before(:each) do
    assign(:article_comment, ArticleComment.create!(
      review_user_id: "Review User",
      content: "Content"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Review User/)
    expect(rendered).to match(/Content/)
  end
end
