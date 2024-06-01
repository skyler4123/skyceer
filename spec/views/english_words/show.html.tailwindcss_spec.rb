require 'rails_helper'

RSpec.describe "english_words/show", type: :view do
  before(:each) do
    assign(:english_word, EnglishWord.create!(
      name: "Name",
      ipa: "Ipa"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Ipa/)
  end
end
