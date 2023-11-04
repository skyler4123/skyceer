# require 'rails_helper'

# RSpec.describe "blogs/edit", type: :view do
#   let(:blog) {
#     Blog.create!(
#       content: "MyString",
#       blog_user: nil
#     )
#   }

#   before(:each) do
#     assign(:blog, blog)
#   end

#   it "renders the edit blog form" do
#     render

#     assert_select "form[action=?][method=?]", blog_path(blog), "post" do

#       assert_select "input[name=?]", "blog[content]"

#       assert_select "input[name=?]", "blog[blog_user_id]"
#     end
#   end
# end
