require 'rails_helper'

RSpec.describe "blogs/show", type: :view do
  before(:each) do
    assign(:blog, Blog.create!(
      content: "Content",
      blogger: nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Content/)
    expect(rendered).to match(//)
  end
end
