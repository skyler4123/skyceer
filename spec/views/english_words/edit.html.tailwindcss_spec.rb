require 'rails_helper'

RSpec.describe "english_words/edit", type: :view do
  let(:english_word) {
    EnglishWord.create!(
      word: "MyString",
      phonetic: "MyString"
    )
  }

  before(:each) do
    assign(:english_word, english_word)
  end

  it "renders the edit english_word form" do
    render

    assert_select "form[action=?][method=?]", english_word_path(english_word), "post" do

      assert_select "input[name=?]", "english_word[word]"

      assert_select "input[name=?]", "english_word[phonetic]"
    end
  end
end
