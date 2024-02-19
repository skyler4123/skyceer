require 'rails_helper'

RSpec.describe "agriculture_users/new", type: :view do
  before(:each) do
    assign(:agriculture_user, AgricultureUser.new(
      user: nil
    ))
  end

  it "renders new agriculture_user form" do
    render

    assert_select "form[action=?][method=?]", agriculture_users_path, "post" do

      assert_select "input[name=?]", "agriculture_user[user_id]"
    end
  end
end
