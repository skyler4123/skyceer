module SelectHelpers
  def multi_select(name_attribute, text)
    choicesjs_multi_select(name_attribute: name_attribute, text: text)
  end

  def single_select(name_attribute, text)
    choicesjs_single_select(name_attribute: name_attribute, text: text)
  end

  def choicesjs_multi_select(name_attribute:, text:)
      # Find and interact with the invisible select element
      select = find("select[name='#{name_attribute}']", visible: false)
      choicesjs_parent = select.find(:xpath, '..').find(:xpath, "ancestor::*[@data-type='select-multiple']")
      choicesjs_parent.click

      # Find the sub-element with only text inside that matches value
      # option = choicesjs_parent.find(:xpath, ".//div[not(*) and text()='#{text}']")
      option = choicesjs_parent.find(:xpath, ".//div[not(*) and contains(text(), '#{text}')]")

      option.click
  end

  def choicesjs_single_select(name_attribute:, text:)
    # Find and interact with the invisible select element
    select = find("select[name='#{name_attribute}']", visible: false)
    choicesjs_parent = select.find(:xpath, '..').find(:xpath, "ancestor::*[@data-type='select-one']")
    choicesjs_parent.click

    # Find the sub-element with only text inside that matches value
    option = choicesjs_parent.find(:xpath, ".//div[not(*) and contains(text(), '#{text}')]")
    option.click
  end
end

RSpec.configure do |config|
  config.include SelectHelpers
end