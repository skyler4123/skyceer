require 'rails_helper'

RSpec.describe "english_users/show", type: :view do
  before(:each) do
    assign(:english_user, EnglishUser.create!(
      user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
