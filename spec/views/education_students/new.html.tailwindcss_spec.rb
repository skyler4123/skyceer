require 'rails_helper'

RSpec.describe "education_students/new", type: :view do
  before(:each) do
    assign(:education_student, EducationStudent.new(
      education_user: nil,
      name: "MyString"
    ))
  end

  it "renders new education_student form" do
    render

    assert_select "form[action=?][method=?]", education_students_path, "post" do

      assert_select "input[name=?]", "education_student[education_user_id]"

      assert_select "input[name=?]", "education_student[name]"
    end
  end
end
