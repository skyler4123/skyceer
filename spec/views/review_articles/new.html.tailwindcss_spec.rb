require 'rails_helper'

RSpec.describe "review_articles/new", type: :view do
  before(:each) do
    assign(:review_article, ReviewArticle.new(
      title: "MyString",
      body: "MyString"
    ))
  end

  it "renders new review_article form" do
    render

    assert_select "form[action=?][method=?]", review_articles_path, "post" do

      assert_select "input[name=?]", "review_article[title]"

      assert_select "input[name=?]", "review_article[body]"
    end
  end
end
