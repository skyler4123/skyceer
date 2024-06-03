require 'rails_helper'

RSpec.describe "english_meanings/new", type: :view do
  before(:each) do
    assign(:english_meaning, EnglishMeaning.new(
      part_of_speech: "MyString",
      synonyms: "MyString",
      antonyms: "MyString"
    ))
  end

  it "renders new english_meaning form" do
    render

    assert_select "form[action=?][method=?]", english_meanings_path, "post" do

      assert_select "input[name=?]", "english_meaning[part_of_speech]"

      assert_select "input[name=?]", "english_meaning[synonyms]"

      assert_select "input[name=?]", "english_meaning[antonyms]"
    end
  end
end
