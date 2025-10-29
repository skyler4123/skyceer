# OpenTelemetry.logger_provider.logger(name: "skyceer-#{Rails.env}").on_emit(body: "A log message from console!")

# config/initializers/opentelemetry.rb
require "opentelemetry/sdk"
require "opentelemetry/exporter/otlp"
require "opentelemetry/instrumentation/all"

# if Rails.env.production? || Rails.env.development?
ENV["OTEL_EXPORTER_OTLP_ENDPOINT"] = Rails.application.credentials.dig(:otel_exporter_otlp_endpoint) || "http://localhost:4318"

# Set OpenTelemetry's internal logger to a higher level (e.g., FATAL)
# This will suppress the ERROR messages like the connection failures.
OpenTelemetry.logger.level = Logger::FATAL

OpenTelemetry::SDK.configure do |c|
  c.service_name = "skyceer-#{Rails.env}"

  # Use all instrumentation BUT exclude Net::HTTP for OTLP endpoint
  c.use_all(
    "OpenTelemetry::Instrumentation::Net::HTTP" => {
      enabled: false, # Disable Net::HTTP instrumentation to avoid recursion
      untraced_hosts: [ "grafana:4318", "localhost:4318" ] # Don't trace OTLP exports
    },
    # Configuration to ignore ActiveRecord
    "OpenTelemetry::Instrumentation::ActiveRecord" => {
      enabled: false # Disable ActiveRecord instrumentation
    },
    # OpenTelemetry::Instrumentation::Rack
    "OpenTelemetry::Instrumentation::Rake" => {
      enabled: false
    },
    "OpenTelemetry::Instrumentation::PG" => {
      enabled: false
    },
    # OpenTelemetry::Instrumentation::ActiveJob
    "OpenTelemetry::Instrumentation::ActionView" => {
      enabled: false
    },
    "OpenTelemetry::Instrumentation::ActiveStorage" => {
      enabled: false
    },
    "OpenTelemetry::Instrumentation::ConcurrentRuby" => {
      enabled: false
    },
    "OpenTelemetry::Instrumentation::Faraday" => {
      enabled: false
    },
    "OpenTelemetry::Instrumentation::Mongo" => {
      enabled: false
    },
    "OpenTelemetry::Instrumentation::Rails" => {
      enabled: false
    },
  )
end
# end
