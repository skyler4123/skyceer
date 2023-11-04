# require 'rails_helper'

# RSpec.describe "blog_users/edit", type: :view do
#   let(:blog_user) {
#     BlogUser.create!(
#       nickname: "MyString",
#       user_id: "MyString"
#     )
#   }

#   before(:each) do
#     assign(:blog_user, blog_user)
#   end

#   it "renders the edit blog_user form" do
#     render

#     assert_select "form[action=?][method=?]", blog_user_path(blog_user), "post" do

#       assert_select "input[name=?]", "blog_user[nickname]"

#       assert_select "input[name=?]", "blog_user[user_id]"
#     end
#   end
# end
