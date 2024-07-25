require "capybara/cuprite"

Capybara.javascript_driver = :cuprite
browser_options = {
  'no-sandbox': nil,
}
options = {
  headless: ENABLE_HEADLESS_MODE_BROWSER, # (String | Boolean) - Set browser as headless or not, true by default. You can set "new" to support new headless mode.
  # xvfb: false, # (Boolean) - Run browser in a virtual framebuffer, false by default.
  # flatten: true, # (Boolean) - Use one websocket connection to the browser and all the pages in flatten mode.
  window_size: [1024, 768], # (Array) - The dimensions of the browser window in which to test, expressed as a 2-element array, e.g. [1024, 768]. Default: [1024, 768]
  # extensions: [], # (Array[String | Hash]) - An array of paths to files or JS source code to be preloaded into the browser e.g.: ["/path/to/script.js", { source: "window.secret = 'top'" }]
  # logger: nil, # (Object responding to puts) - When present, debug output is written to this object.
  # slowmo: 1, # (Integer | Float) - Set a delay in seconds to wait before sending command. Useful companion of headless option, so that you have time to see changes.
  # timeout: 5, # (Numeric) - The number of seconds we'll wait for a response when communicating with browser. Default is 5.
  # js_errors: true, # (Boolean) - When true, JavaScript errors get re-raised in Ruby.
  # pending_connection_errors: true, # (Boolean) - When main frame is still waiting for slow responses while timeout is reached PendingConnectionsError is raised. It's better to figure out why you have slow responses and fix or block them rather than turn this setting off. Default is true.
  # browser_name: :chrome, # (Symbol) - :chrome by default, only experimental support for :firefox for now.
  # browser_path: nil, # (String) - Path to Chrome binary, you can also set ENV variable as BROWSER_PATH=some/path/chrome bundle exec rspec.
  browser_options: browser_options, # (Hash) - Additional command line options, see them all e.g. { "ignore-certificate-errors" => nil }
  # ignore_default_browser_options: nil, # (Boolean) - Ferrum has a number of default options it passes to the browser, if you set this to true then only options you put in :browser_options will be passed to the browser, except required ones of course.
  # port: nil, # (Integer) - Remote debugging port for headless Chrome.
  # host: nil, # (String) - Remote debugging address for headless Chrome.
  # url: nil, # (String) - URL for a running instance of Chrome. If this is set, a browser process will not be spawned.
  # ws_url: nil, # (String) - Websocket url for a running instance of Chrome. If this is set, a browser process will not be spawned. It's higher priority than :url, setting both doesn't make sense.
  # process_timeout: 5, # (Integer) - How long to wait for the Chrome process to respond on startup.
  # ws_max_receive_size: 64, # (Integer) - How big messages to accept from Chrome over the web socket, in bytes. Defaults to 64MB. Incoming messages larger than this will cause a Ferrum::DeadBrowserError.
  # proxy: {}, # (Hash) - Specify proxy settings, read more
  # save_path: {}, # (String) - Path to save attachments with Content-Disposition header.
  # env: {}, # (Hash) - Environment variables you'd like to pass through to the process
  inspector: true,
}
Capybara.register_driver(:cuprite) do |app|
  Capybara::Cuprite::Driver.new(app, options)
end