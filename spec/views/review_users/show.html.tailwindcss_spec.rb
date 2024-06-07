require 'rails_helper'

RSpec.describe "review_users/show", type: :view do
  before(:each) do
    assign(:review_user, ReviewUser.create!(
      user_id: "User"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/User/)
  end
end
