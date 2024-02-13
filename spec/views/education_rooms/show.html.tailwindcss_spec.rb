require 'rails_helper'

RSpec.describe "education_rooms/show", type: :view do
  before(:each) do
    assign(:education_room, EducationRoom.create!(
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
