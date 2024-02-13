require 'rails_helper'

RSpec.describe "education_users/show", type: :view do
  before(:each) do
    assign(:education_user, EducationUser.create!(
      user: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
  end
end
