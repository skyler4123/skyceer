require 'rails_helper'

RSpec.describe "english_meanings/show", type: :view do
  before(:each) do
    assign(:english_meaning, EnglishMeaning.create!(
      part_of_speech: "Part Of Speech",
      synonyms: "Synonyms",
      antonyms: "Antonyms"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Part Of Speech/)
    expect(rendered).to match(/Synonyms/)
    expect(rendered).to match(/Antonyms/)
  end
end
