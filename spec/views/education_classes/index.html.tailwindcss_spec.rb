require 'rails_helper'

RSpec.describe "education_classes/index", type: :view do
  before(:each) do
    assign(:education_classes, [
      EducationClass.create!(
        education_school: nil,
        name: "Name"
      ),
      EducationClass.create!(
        education_school: nil,
        name: "Name"
      )
    ])
  end

  it "renders a list of education_classes" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
  end
end
