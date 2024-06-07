require 'rails_helper'

RSpec.describe "review_comments/index", type: :view do
  before(:each) do
    assign(:review_comments, [
      ReviewComment.create!(
        body: "Body"
      ),
      ReviewComment.create!(
        body: "Body"
      )
    ])
  end

  it "renders a list of review_comments" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Body".to_s), count: 2
  end
end
