require 'rails_helper'

RSpec.describe "review_articles/edit", type: :view do
  let(:review_article) {
    ReviewArticle.create!(
      title: "MyString",
      body: "MyString"
    )
  }

  before(:each) do
    assign(:review_article, review_article)
  end

  it "renders the edit review_article form" do
    render

    assert_select "form[action=?][method=?]", review_article_path(review_article), "post" do

      assert_select "input[name=?]", "review_article[title]"

      assert_select "input[name=?]", "review_article[body]"
    end
  end
end
