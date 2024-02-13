require 'rails_helper'

RSpec.describe "education_schools/new", type: :view do
  before(:each) do
    assign(:education_school, EducationSchool.new(
      education_user: nil,
      name: "MyString"
    ))
  end

  it "renders new education_school form" do
    render

    assert_select "form[action=?][method=?]", education_schools_path, "post" do

      assert_select "input[name=?]", "education_school[education_user_id]"

      assert_select "input[name=?]", "education_school[name]"
    end
  end
end
