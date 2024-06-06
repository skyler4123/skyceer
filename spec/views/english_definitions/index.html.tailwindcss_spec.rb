require 'rails_helper'

RSpec.describe "english_definitions/index", type: :view do
  before(:each) do
    assign(:english_definitions, [
      EnglishDefinition.create!(
        definition: "Definition",
        synonyms: "Synonyms",
        antonyms: "Antonyms",
        example: "Example"
      ),
      EnglishDefinition.create!(
        definition: "Definition",
        synonyms: "Synonyms",
        antonyms: "Antonyms",
        example: "Example"
      )
    ])
  end

  it "renders a list of english_definitions" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Definition".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Synonyms".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Antonyms".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Example".to_s), count: 2
  end
end
