# require 'rails_helper'

# RSpec.describe "blog_users/index", type: :view do
#   before(:each) do
#     assign(:blog_users, [
#       BlogUser.create!(
#         nickname: "Nickname",
#         user_id: "User"
#       ),
#       BlogUser.create!(
#         nickname: "Nickname",
#         user_id: "User"
#       )
#     ])
#   end

#   it "renders a list of blog_users" do
#     render
#     cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
#     assert_select cell_selector, text: Regexp.new("Nickname".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new("User".to_s), count: 2
#   end
# end
