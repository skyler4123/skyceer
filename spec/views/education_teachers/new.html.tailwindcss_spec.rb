require 'rails_helper'

RSpec.describe "education_teachers/new", type: :view do
  before(:each) do
    assign(:education_teacher, EducationTeacher.new(
      education_user: nil,
      name: "MyString"
    ))
  end

  it "renders new education_teacher form" do
    render

    assert_select "form[action=?][method=?]", education_teachers_path, "post" do

      assert_select "input[name=?]", "education_teacher[education_user_id]"

      assert_select "input[name=?]", "education_teacher[name]"
    end
  end
end
