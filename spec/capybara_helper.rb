require 'capybara'
require 'selenium-webdriver'

Capybara.register_driver :selenium_chrome do |app|
  Capybara::Selenium::Driver.new(app, browser: :chrome)
end
Capybara.javascript_driver = :selenium_chrome
Capybara.default_max_wait_time = 5

# Capybara.default_driver = :selenium_chrome
# Capybara.use_default_driver
# Capybara.app_host = "http://" + 'localhost:3000'