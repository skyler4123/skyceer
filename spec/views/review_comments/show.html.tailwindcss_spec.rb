require 'rails_helper'

RSpec.describe "review_comments/show", type: :view do
  before(:each) do
    assign(:review_comment, ReviewComment.create!(
      body: "Body"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Body/)
  end
end
