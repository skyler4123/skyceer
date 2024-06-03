require 'rails_helper'

RSpec.describe "english_phonetics/show", type: :view do
  before(:each) do
    assign(:english_phonetic, EnglishPhonetic.create!(
      text: "Text",
      audio: "Audio",
      source_url: "Source Url"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Text/)
    expect(rendered).to match(/Audio/)
    expect(rendered).to match(/Source Url/)
  end
end
