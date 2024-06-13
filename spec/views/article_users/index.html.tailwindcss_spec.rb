require 'rails_helper'

RSpec.describe "article_users/index", type: :view do
  before(:each) do
    assign(:article_users, [
      ArticleUser.create!(
        user_id: "User"
      ),
      ArticleUser.create!(
        user_id: "User"
      )
    ])
  end

  it "renders a list of article_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("User".to_s), count: 2
  end
end
