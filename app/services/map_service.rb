require 'selenium-webdriver'
require 'debug'

class MapService

  def self.find_coordinate_by_address(address = '90 Nguyen Dinh Chieu, quan 3, Ho Chi Minh')
    options = Selenium::WebDriver::Chrome::Options.new(args: ['headless'])
    driver = Selenium::WebDriver.for :chrome, options: options
    # driver = Selenium::WebDriver.for :chrome
    wait = Selenium::WebDriver::Wait.new
        # wait.until { revealed.displayed? }
    driver.manage.timeouts.implicit_wait = 5000
    driver.get 'https://www.google.com/maps'
    
    search_box_input = driver.find_element(id: 'searchboxinput')
    search_box_input.send_keys(address)
    
    search_button = driver.find_element(id: 'searchbox-searchbutton')
    search_button.click
    
    canvas = driver.find_element(tag_name: 'canvas')
    # canvas_size = canvas.size
    # click_coordinate = [canvas_size[:width]/2, canvas_size[:height]/2]
    sleep(3)
    driver.action.move_to_location(676, 425).context_click.perform
    action_menu = driver.find_element(id: 'action-menu')
    coordinate_element = action_menu.find_element(css: '[data-index="0"]')
    coordinate = coordinate_element.text
    driver.quit
    return coordinate
  end

end
