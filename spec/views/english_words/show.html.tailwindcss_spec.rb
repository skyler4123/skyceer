require 'rails_helper'

RSpec.describe "english_words/show", type: :view do
  before(:each) do
    assign(:english_word, EnglishWord.create!(
      word: "Word",
      phonetic: "Phonetic"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Word/)
    expect(rendered).to match(/Phonetic/)
  end
end
