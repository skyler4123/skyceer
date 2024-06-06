require 'rails_helper'

RSpec.describe "english_phonetics/index", type: :view do
  before(:each) do
    assign(:english_phonetics, [
      EnglishPhonetic.create!(
        text: "Text",
        audio: "Audio",
        source_url: "Source Url"
      ),
      EnglishPhonetic.create!(
        text: "Text",
        audio: "Audio",
        source_url: "Source Url"
      )
    ])
  end

  it "renders a list of english_phonetics" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Text".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Audio".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Source Url".to_s), count: 2
  end
end
