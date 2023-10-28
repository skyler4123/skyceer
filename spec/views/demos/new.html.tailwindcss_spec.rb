# require 'rails_helper'

# RSpec.describe "demos/new", type: :view do
#   before(:each) do
#     assign(:demo, Demo.new(
#       string: "MyString",
#       text: "MyText",
#       float: 1.5,
#       decimal: "9.99",
#       binary: "",
#       boolean: false,
#       json: ""
#     ))
#   end

#   it "renders new demo form" do
#     render

#     assert_select "form[action=?][method=?]", demos_path, "post" do

#       assert_select "input[name=?]", "demo[string]"

#       assert_select "textarea[name=?]", "demo[text]"

#       assert_select "input[name=?]", "demo[float]"

#       assert_select "input[name=?]", "demo[decimal]"

#       assert_select "input[name=?]", "demo[binary]"

#       assert_select "input[name=?]", "demo[boolean]"

#       assert_select "input[name=?]", "demo[json]"
#     end
#   end
# end
