require 'rails_helper'

RSpec.describe "english_words/index", type: :view do
  before(:each) do
    assign(:english_words, [
      EnglishWord.create!(
        word: "Word",
        phonetic: "Phonetic"
      ),
      EnglishWord.create!(
        word: "Word",
        phonetic: "Phonetic"
      )
    ])
  end

  it "renders a list of english_words" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new("Word".to_s), count: 2
    assert_select cell_selector, text: Regexp.new("Phonetic".to_s), count: 2
  end
end
