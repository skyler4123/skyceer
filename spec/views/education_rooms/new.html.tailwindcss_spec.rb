require 'rails_helper'

RSpec.describe "education_rooms/new", type: :view do
  before(:each) do
    assign(:education_room, EducationRoom.new(
      education_school: nil,
      name: "MyString"
    ))
  end

  it "renders new education_room form" do
    render

    assert_select "form[action=?][method=?]", education_rooms_path, "post" do

      assert_select "input[name=?]", "education_room[education_school_id]"

      assert_select "input[name=?]", "education_room[name]"
    end
  end
end
