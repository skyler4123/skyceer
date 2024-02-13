require 'rails_helper'

RSpec.describe "education_users/edit", type: :view do
  let(:education_user) {
    EducationUser.create!(
      user: nil
    )
  }

  before(:each) do
    assign(:education_user, education_user)
  end

  it "renders the edit education_user form" do
    render

    assert_select "form[action=?][method=?]", education_user_path(education_user), "post" do

      assert_select "input[name=?]", "education_user[user_id]"
    end
  end
end
