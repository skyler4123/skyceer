require 'rails_helper'

RSpec.describe "agriculture_farmers/edit", type: :view do
  let(:agriculture_farmer) {
    AgricultureFarmer.create!(
      agriculture_user: nil
    )
  }

  before(:each) do
    assign(:agriculture_farmer, agriculture_farmer)
  end

  it "renders the edit agriculture_farmer form" do
    render

    assert_select "form[action=?][method=?]", agriculture_farmer_path(agriculture_farmer), "post" do

      assert_select "input[name=?]", "agriculture_farmer[agriculture_user_id]"
    end
  end
end
