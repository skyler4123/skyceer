require 'rails_helper'

RSpec.describe "english_phonetics/new", type: :view do
  before(:each) do
    assign(:english_phonetic, EnglishPhonetic.new(
      text: "MyString",
      audio: "MyString",
      source_url: "MyString"
    ))
  end

  it "renders new english_phonetic form" do
    render

    assert_select "form[action=?][method=?]", english_phonetics_path, "post" do

      assert_select "input[name=?]", "english_phonetic[text]"

      assert_select "input[name=?]", "english_phonetic[audio]"

      assert_select "input[name=?]", "english_phonetic[source_url]"
    end
  end
end
