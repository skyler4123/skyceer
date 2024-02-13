require 'rails_helper'

RSpec.describe "education_classes/new", type: :view do
  before(:each) do
    assign(:education_class, EducationClass.new(
      education_school: nil,
      name: "MyString"
    ))
  end

  it "renders new education_class form" do
    render

    assert_select "form[action=?][method=?]", education_classes_path, "post" do

      assert_select "input[name=?]", "education_class[education_school_id]"

      assert_select "input[name=?]", "education_class[name]"
    end
  end
end
