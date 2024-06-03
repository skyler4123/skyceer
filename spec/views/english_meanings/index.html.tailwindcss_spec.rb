require 'rails_helper'

RSpec.describe "english_meanings/index", type: :view do
  before(:each) do
    assign(:english_meanings, [
      EnglishMeaning.create!(
        part_of_speech: "Part Of Speech",
        synonyms: "Synonyms",
        antonyms: "Antonyms"
      ),
      EnglishMeaning.create!(
        part_of_speech: "Part Of Speech",
        synonyms: "Synonyms",
        antonyms: "Antonyms"
      )
    ])
  end

  it "renders a list of english_meanings" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Part Of Speech".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Synonyms".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Antonyms".to_s), count: 2
  end
end
