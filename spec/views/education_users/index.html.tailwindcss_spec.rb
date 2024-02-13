require 'rails_helper'

RSpec.describe "education_users/index", type: :view do
  before(:each) do
    assign(:education_users, [
      EducationUser.create!(
        user: nil
      ),
      EducationUser.create!(
        user: nil
      )
    ])
  end

  it "renders a list of education_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
