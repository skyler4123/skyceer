require 'rails_helper'

RSpec.describe "english_users/index", type: :view do
  before(:each) do
    assign(:english_users, [
      EnglishUser.create!(
        user: nil
      ),
      EnglishUser.create!(
        user: nil
      )
    ])
  end

  it "renders a list of english_users" do
    render
    cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
    assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
  end
end
