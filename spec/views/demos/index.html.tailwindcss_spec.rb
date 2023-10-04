require 'rails_helper'

RSpec.describe "demos/index", type: :view do
  before(:each) do
    assign(:demos, [
      Demo.create!(
        content: "Content"
      ),
      Demo.create!(
        content: "Content"
      )
    ])
  end

  it "renders a list of demos" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Content".to_s), count: 2
  end
end
