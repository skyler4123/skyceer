require 'rails_helper'

RSpec.describe "education_schools/edit", type: :view do
  let(:education_school) {
    EducationSchool.create!(
      education_user: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:education_school, education_school)
  end

  it "renders the edit education_school form" do
    render

    assert_select "form[action=?][method=?]", education_school_path(education_school), "post" do

      assert_select "input[name=?]", "education_school[education_user_id]"

      assert_select "input[name=?]", "education_school[name]"
    end
  end
end
