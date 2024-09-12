require_relative "boot"

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Skyceer
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")






    # Don't generate system test files.
    config.generators.system_tests = nil
    config.paths.add 'app/packages', glob: '*/{*,*/concerns}', eager_load: true
    config.assets.paths << Rails.root.join('app')
    # config.assets.css_compressor = nil
    config.generators.orm :active_record, primary_key_type: :uuid
    config.mongoid.logger.level = Logger::INFO
    # Use a separate DB for Solid Queue
    # config/environments/production.rb
    config.active_job.queue_adapter = :solid_queue
    config.solid_queue.connects_to = { database: { writing: :queue, reading: :queue } }
    # config.solid_queue.silence_polling = false
  end
end
