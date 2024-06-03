require 'rails_helper'

RSpec.describe "english_users/edit", type: :view do
  let(:english_user) {
    EnglishUser.create!(
      user_id: "MyString"
    )
  }

  before(:each) do
    assign(:english_user, english_user)
  end

  it "renders the edit english_user form" do
    render

    assert_select "form[action=?][method=?]", english_user_path(english_user), "post" do

      assert_select "input[name=?]", "english_user[user_id]"
    end
  end
end
