require 'rails_helper'

RSpec.describe "education_classes/edit", type: :view do
  let(:education_class) {
    EducationClass.create!(
      education_school: nil,
      name: "MyString"
    )
  }

  before(:each) do
    assign(:education_class, education_class)
  end

  it "renders the edit education_class form" do
    render

    assert_select "form[action=?][method=?]", education_class_path(education_class), "post" do

      assert_select "input[name=?]", "education_class[education_school_id]"

      assert_select "input[name=?]", "education_class[name]"
    end
  end
end
