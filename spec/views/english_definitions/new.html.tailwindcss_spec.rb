require 'rails_helper'

RSpec.describe "english_definitions/new", type: :view do
  before(:each) do
    assign(:english_definition, EnglishDefinition.new(
      definition: "MyString",
      synonyms: "MyString",
      antonyms: "MyString",
      example: "MyString"
    ))
  end

  it "renders new english_definition form" do
    render

    assert_select "form[action=?][method=?]", english_definitions_path, "post" do

      assert_select "input[name=?]", "english_definition[definition]"

      assert_select "input[name=?]", "english_definition[synonyms]"

      assert_select "input[name=?]", "english_definition[antonyms]"

      assert_select "input[name=?]", "english_definition[example]"
    end
  end
end
