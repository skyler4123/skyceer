require 'rails_helper'

RSpec.describe "article_users/new", type: :view do
  before(:each) do
    assign(:article_user, ArticleUser.new(
      user_id: "MyString"
    ))
  end

  it "renders new article_user form" do
    render

    assert_select "form[action=?][method=?]", article_users_path, "post" do

      assert_select "input[name=?]", "article_user[user_id]"
    end
  end
end
