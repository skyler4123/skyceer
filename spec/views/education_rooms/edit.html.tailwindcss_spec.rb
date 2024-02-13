require 'rails_helper'

RSpec.describe "education_rooms/edit", type: :view do
  let(:education_room) {
    EducationRoom.create!(
      education_school: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:education_room, education_room)
  end

  it "renders the edit education_room form" do
    render

    assert_select "form[action=?][method=?]", education_room_path(education_room), "post" do

      assert_select "input[name=?]", "education_room[education_school_id]"

      assert_select "input[name=?]", "education_room[name]"
    end
  end
end
