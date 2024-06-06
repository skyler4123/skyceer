require 'rails_helper'

RSpec.describe "english_licenses/index", type: :view do
  before(:each) do
    assign(:english_licenses, [
      EnglishLicense.create!(
        name: "Name",
        url: "Url"
      ),
      EnglishLicense.create!(
        name: "Name",
        url: "Url"
      )
    ])
  end

  it "renders a list of english_licenses" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Url".to_s), count: 2
  end
end
