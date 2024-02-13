require 'rails_helper'

RSpec.describe "education_classes/show", type: :view do
  before(:each) do
    assign(:education_class, EducationClass.create!(
      education_school: nil,
      name: "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(//)
    expect(rendered).to match(/Name/)
  end
end
