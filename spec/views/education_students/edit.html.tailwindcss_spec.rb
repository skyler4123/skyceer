require 'rails_helper'

RSpec.describe "education_students/edit", type: :view do
  let(:education_student) {
    EducationStudent.create!(
      education_user: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:education_student, education_student)
  end

  it "renders the edit education_student form" do
    render

    assert_select "form[action=?][method=?]", education_student_path(education_student), "post" do

      assert_select "input[name=?]", "education_student[education_user_id]"

      assert_select "input[name=?]", "education_student[name]"
    end
  end
end
