require 'rails_helper'

RSpec.describe "agriculture_users/index", type: :view do
  before(:each) do
    assign(:agriculture_users, [
      AgricultureUser.create!(
        user: nil
      ),
      AgricultureUser.create!(
        user: nil
      )
    ])
  end

  it "renders a list of agriculture_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
