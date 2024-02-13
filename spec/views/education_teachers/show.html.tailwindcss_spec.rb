require 'rails_helper'

RSpec.describe "education_teachers/show", type: :view do
  before(:each) do
    assign(:education_teacher, EducationTeacher.create!(
      education_user: nil,
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Name/)
  end
end
