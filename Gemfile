source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.4.3"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
# gem "sprockets-rails"
gem "propshaft"

# Use sqlite3 as the database for Active Record
gem "sqlite3"

# Use postgresql as the database for Active Record
gem "pg"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma"

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Use Tailwind CSS [https://github.com/rails/tailwindcss-rails]
gem "tailwindcss-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
gem "bcrypt"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Use the database-backed adapters for Rails.cache, Active Job, and Action Cable
gem "solid_cache"
gem "solid_queue"
gem "solid_cable"
gem "mission_control-jobs"

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false


# Deploy this application anywhere as a Docker container [https://kamal-deploy.org]
gem "kamal", require: false

# Add HTTP asset caching/compression and X-Sendfile acceleration to Puma [https://github.com/basecamp/thruster/]
gem "thruster", require: false

# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'rswag-specs'
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
  # gem "hotwire-spark"
end

group :test do
  gem "rspec-rails"
  gem 'factory_bot_rails'
  gem "rails-controller-testing"
  gem 'shoulda-matchers'
  # gem "selenium-webdriver"
  gem "cuprite"
  gem 'capybara'
  gem 'simplecov', require: false
  gem 'rack-test'
  gem 'webmock'
  gem 'vcr'
  gem "rspec-retry"
end

gem "packwerk"
gem "graphwerk"
gem "dotenv-rails"
gem "view_component"
gem "faker"
gem "jwt"
gem "em-websocket"
gem "aws-sdk-s3", require: false
gem 'rack-mini-profiler', require: false
gem 'memory_profiler'
gem 'stackprof'
gem "mongoid"
gem 'pagy'
gem 'rack-cors'

gem 'rswag-api'
gem 'rswag-ui'

gem "searchkick"
gem "opensearch-ruby" # select one
# gem "elasticsearch-model"
# gem "elasticsearch-rails"
# gem "elasticsearch-persistence"

gem 'rack-attack'

gem 'omniauth-google-oauth2'

gem 'money-rails'
gem 'eu_central_bank'

gem 'silencer', require: false
gem 'country_select'
gem "pundit"
gem 'discard'
