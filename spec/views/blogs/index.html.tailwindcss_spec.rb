# require 'rails_helper'

# RSpec.describe "blogs/index", type: :view do
#   before(:each) do
#     assign(:blogs, [
#       Blog.create!(
#         content: "Content",
#         blog_user: nil
#       ),
#       Blog.create!(
#         content: "Content",
#         blog_user: nil
#       )
#     ])
#   end

#   it "renders a list of blogs" do
#     render
#     cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
#     assert_select cell_selector, text: Regexp.new("Content".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new(nil.to_s), count: 2
#   end
# end
