require 'rails_helper'

RSpec.describe "review_articles/show", type: :view do
  before(:each) do
    assign(:review_article, ReviewArticle.create!(
      title: "Title",
      body: "Body"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Body/)
  end
end
