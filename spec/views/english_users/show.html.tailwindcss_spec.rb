require 'rails_helper'

RSpec.describe "english_users/show", type: :view do
  before(:each) do
    assign(:english_user, EnglishUser.create!(
      user_id: "User"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/User/)
  end
end
