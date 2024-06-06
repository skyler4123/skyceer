require 'rails_helper'

RSpec.describe "english_definitions/show", type: :view do
  before(:each) do
    assign(:english_definition, EnglishDefinition.create!(
      definition: "Definition",
      synonyms: "Synonyms",
      antonyms: "Antonyms",
      example: "Example"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Definition/)
    expect(rendered).to match(/Synonyms/)
    expect(rendered).to match(/Antonyms/)
    expect(rendered).to match(/Example/)
  end
end
