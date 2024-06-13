require 'rails_helper'

RSpec.describe "article_users/edit", type: :view do
  let(:article_user) {
    ArticleUser.create!(
      user_id: "MyString"
    )
  }

  before(:each) do
    assign(:article_user, article_user)
  end

  it "renders the edit article_user form" do
    render

    assert_select "form[action=?][method=?]", article_user_path(article_user), "post" do

      assert_select "input[name=?]", "article_user[user_id]"
    end
  end
end
