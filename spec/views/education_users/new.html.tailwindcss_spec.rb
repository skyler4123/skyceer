require 'rails_helper'

RSpec.describe "education_users/new", type: :view do
  before(:each) do
    assign(:education_user, EducationUser.new(
      user: nil
    ))
  end

  it "renders new education_user form" do
    render

    assert_select "form[action=?][method=?]", education_users_path, "post" do

      assert_select "input[name=?]", "education_user[user_id]"
    end
  end
end
