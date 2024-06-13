require 'rails_helper'

RSpec.describe "article_users/show", type: :view do
  before(:each) do
    assign(:article_user, ArticleUser.create!(
      user_id: "User"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/User/)
  end
end
