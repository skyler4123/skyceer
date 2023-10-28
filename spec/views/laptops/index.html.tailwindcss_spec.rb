# require 'rails_helper'

# RSpec.describe "laptops/index", type: :view do
#   before(:each) do
#     assign(:laptops, [
#       Laptop.create!(
#         name: "Name",
#         brand: "Brand",
#         model_name: "Model Name",
#         unit_price: "9.99",
#         quantity: 2,
#         color: 3,
#         hard_disk: 4,
#         cpu: "Cpu",
#         ram: "Ram",
#         os: "Os",
#         graphic_card: "Graphic Card",
#         screen_size: 5.5
#       ),
#       Laptop.create!(
#         name: "Name",
#         brand: "Brand",
#         model_name: "Model Name",
#         unit_price: "9.99",
#         quantity: 2,
#         color: 3,
#         hard_disk: 4,
#         cpu: "Cpu",
#         ram: "Ram",
#         os: "Os",
#         graphic_card: "Graphic Card",
#         screen_size: 5.5
#       )
#     ])
#   end

#   it "renders a list of laptops" do
#     render
#     cell_selector = Rails::VERSION::STRING >= '7' ? 'div>p' : 'tr>td'
#     assert_select cell_selector, text: Regexp.new("Name".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new("Brand".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new("Model Name".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new("9.99".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new(2.to_s), count: 2
#     assert_select cell_selector, text: Regexp.new(3.to_s), count: 2
#     assert_select cell_selector, text: Regexp.new(4.to_s), count: 2
#     assert_select cell_selector, text: Regexp.new("Cpu".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new("Ram".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new("Os".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new("Graphic Card".to_s), count: 2
#     assert_select cell_selector, text: Regexp.new(5.5.to_s), count: 2
#   end
# end
