# require 'rails_helper'

# RSpec.describe "laptops/edit", type: :view do
#   let(:laptop) {
#     Laptop.create!(
#       name: "MyString",
#       brand: "MyString",
#       model_name: "MyString",
#       unit_price: "9.99",
#       quantity: 1,
#       color: 1,
#       hard_disk: 1,
#       cpu: "MyString",
#       ram: "MyString",
#       os: "MyString",
#       graphic_card: "MyString",
#       screen_size: 1.5
#     )
#   }

#   before(:each) do
#     assign(:laptop, laptop)
#   end

#   it "renders the edit laptop form" do
#     render

#     assert_select "form[action=?][method=?]", laptop_path(laptop), "post" do

#       assert_select "input[name=?]", "laptop[name]"

#       assert_select "input[name=?]", "laptop[brand]"

#       assert_select "input[name=?]", "laptop[model_name]"

#       assert_select "input[name=?]", "laptop[unit_price]"

#       assert_select "input[name=?]", "laptop[quantity]"

#       assert_select "input[name=?]", "laptop[color]"

#       assert_select "input[name=?]", "laptop[hard_disk]"

#       assert_select "input[name=?]", "laptop[cpu]"

#       assert_select "input[name=?]", "laptop[ram]"

#       assert_select "input[name=?]", "laptop[os]"

#       assert_select "input[name=?]", "laptop[graphic_card]"

#       assert_select "input[name=?]", "laptop[screen_size]"
#     end
#   end
# end
