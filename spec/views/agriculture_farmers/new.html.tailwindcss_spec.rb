require 'rails_helper'

RSpec.describe "agriculture_farmers/new", type: :view do
  before(:each) do
    assign(:agriculture_farmer, AgricultureFarmer.new(
      agriculture_user: nil
    ))
  end

  it "renders new agriculture_farmer form" do
    render

    assert_select "form[action=?][method=?]", agriculture_farmers_path, "post" do

      assert_select "input[name=?]", "agriculture_farmer[agriculture_user_id]"
    end
  end
end
