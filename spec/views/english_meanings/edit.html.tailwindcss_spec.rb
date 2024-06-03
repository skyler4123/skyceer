require 'rails_helper'

RSpec.describe "english_meanings/edit", type: :view do
  let(:english_meaning) {
    EnglishMeaning.create!(
      part_of_speech: "MyString",
      synonyms: "MyString",
      antonyms: "MyString"
    )
  }

  before(:each) do
    assign(:english_meaning, english_meaning)
  end

  it "renders the edit english_meaning form" do
    render

    assert_select "form[action=?][method=?]", english_meaning_path(english_meaning), "post" do

      assert_select "input[name=?]", "english_meaning[part_of_speech]"

      assert_select "input[name=?]", "english_meaning[synonyms]"

      assert_select "input[name=?]", "english_meaning[antonyms]"
    end
  end
end
