require 'rails_helper'

RSpec.describe "english_words/new", type: :view do
  before(:each) do
    assign(:english_word, EnglishWord.new(
      name: "MyString",
      ipa: "MyString"
    ))
  end

  it "renders new english_word form" do
    render

    assert_select "form[action=?][method=?]", english_words_path, "post" do

      assert_select "input[name=?]", "english_word[name]"

      assert_select "input[name=?]", "english_word[ipa]"
    end
  end
end
