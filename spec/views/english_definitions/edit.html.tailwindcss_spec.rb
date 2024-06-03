require 'rails_helper'

RSpec.describe "english_definitions/edit", type: :view do
  let(:english_definition) {
    EnglishDefinition.create!(
      definition: "MyString",
      synonyms: "MyString",
      antonyms: "MyString",
      example: "MyString"
    )
  }

  before(:each) do
    assign(:english_definition, english_definition)
  end

  it "renders the edit english_definition form" do
    render

    assert_select "form[action=?][method=?]", english_definition_path(english_definition), "post" do

      assert_select "input[name=?]", "english_definition[definition]"

      assert_select "input[name=?]", "english_definition[synonyms]"

      assert_select "input[name=?]", "english_definition[antonyms]"

      assert_select "input[name=?]", "english_definition[example]"
    end
  end
end
