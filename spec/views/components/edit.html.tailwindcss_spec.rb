require 'rails_helper'

RSpec.describe "components/edit", type: :view do
  let(:component) {
    Component.create!()
  }

  before(:each) do
    assign(:component, component)
  end

  it "renders the edit component form" do
    render

    assert_select "form[action=?][method=?]", component_path(component), "post" do
    end
  end
end
