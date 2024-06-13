require 'rails_helper'

RSpec.describe "article_posts/show", type: :view do
  before(:each) do
    assign(:article_post, ArticlePost.create!(
      title: "Title",
      content: "Content",
      article_user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Title/)
    expect(rendered).to match(/Content/)
    expect(rendered).to match(//)
  end
end
