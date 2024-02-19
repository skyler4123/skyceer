require 'rails_helper'

RSpec.describe "agriculture_users/edit", type: :view do
  let(:agriculture_user) {
    AgricultureUser.create!(
      user: nil
    )
  }

  before(:each) do
    assign(:agriculture_user, agriculture_user)
  end

  it "renders the edit agriculture_user form" do
    render

    assert_select "form[action=?][method=?]", agriculture_user_path(agriculture_user), "post" do

      assert_select "input[name=?]", "agriculture_user[user_id]"
    end
  end
end
