require 'rails_helper'

RSpec.describe "english_words/index", type: :view do
  before(:each) do
    assign(:english_words, [
      EnglishWord.create!(
        name: "Name",
        ipa: "Ipa"
      ),
      EnglishWord.create!(
        name: "Name",
        ipa: "Ipa"
      )
    ])
  end

  it "renders a list of english_words" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Ipa".to_s), count: 2
  end
end
