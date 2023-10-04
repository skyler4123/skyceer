require 'rails_helper'

RSpec.describe "demos/show", type: :view do
  before(:each) do
    assign(:demo, Demo.create!(
      content: "Content"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Content/)
  end
end
