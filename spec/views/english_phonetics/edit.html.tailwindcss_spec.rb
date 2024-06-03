require 'rails_helper'

RSpec.describe "english_phonetics/edit", type: :view do
  let(:english_phonetic) {
    EnglishPhonetic.create!(
      text: "MyString",
      audio: "MyString",
      source_url: "MyString"
    )
  }

  before(:each) do
    assign(:english_phonetic, english_phonetic)
  end

  it "renders the edit english_phonetic form" do
    render

    assert_select "form[action=?][method=?]", english_phonetic_path(english_phonetic), "post" do

      assert_select "input[name=?]", "english_phonetic[text]"

      assert_select "input[name=?]", "english_phonetic[audio]"

      assert_select "input[name=?]", "english_phonetic[source_url]"
    end
  end
end
