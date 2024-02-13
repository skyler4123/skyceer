require 'rails_helper'

RSpec.describe "education_schools/index", type: :view do
  before(:each) do
    assign(:education_schools, [
      EducationSchool.create!(
        education_user: nil,
        name: "Name"
      ),
      EducationSchool.create!(
        education_user: nil,
        name: "Name"
      )
    ])
  end

  it "renders a list of education_schools" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
  end
end
