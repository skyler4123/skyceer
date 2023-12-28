require 'rails_helper'

RSpec.describe "components/show", type: :view do
  before(:each) do
    assign(:component, Component.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
