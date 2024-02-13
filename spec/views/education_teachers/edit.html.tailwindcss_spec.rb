require 'rails_helper'

RSpec.describe "education_teachers/edit", type: :view do
  let(:education_teacher) {
    EducationTeacher.create!(
      education_user: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:education_teacher, education_teacher)
  end

  it "renders the edit education_teacher form" do
    render

    assert_select "form[action=?][method=?]", education_teacher_path(education_teacher), "post" do

      assert_select "input[name=?]", "education_teacher[education_user_id]"

      assert_select "input[name=?]", "education_teacher[name]"
    end
  end
end
