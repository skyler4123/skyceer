require 'rails_helper'

RSpec.describe "demos/index", type: :view do
  before(:each) do
    assign(:demos, [
      Demo.create!(
        string: "String",
        text: "MyText",
        float: 2.5,
        decimal: "9.99",
        binary: "",
        boolean: false,
        json: ""
      ),
      Demo.create!(
        string: "String",
        text: "MyText",
        float: 2.5,
        decimal: "9.99",
        binary: "",
        boolean: false,
        json: ""
      )
    ])
  end

  it "renders a list of demos" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("String".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("MyText".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(2.5.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("9.99".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("".to_s), count: 2
    assert_select cell_selector, text: Regexp.new(false.to_s), count: 2
    assert_select cell_selector, text: Regexp.new("".to_s), count: 2
  end
end
