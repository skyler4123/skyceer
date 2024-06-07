require 'rails_helper'

RSpec.describe "review_users/edit", type: :view do
  let(:review_user) {
    ReviewUser.create!(
      user_id: "MyString"
    )
  }

  before(:each) do
    assign(:review_user, review_user)
  end

  it "renders the edit review_user form" do
    render

    assert_select "form[action=?][method=?]", review_user_path(review_user), "post" do

      assert_select "input[name=?]", "review_user[user_id]"
    end
  end
end
