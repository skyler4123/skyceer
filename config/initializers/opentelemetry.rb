# OpenTelemetry.logger_provider.logger(name: "skyceer-#{Rails.env}").on_emit(body: "A log message from console!")

# config/initializers/opentelemetry.rb
require "opentelemetry/sdk"
require "opentelemetry/exporter/otlp"
require "opentelemetry/instrumentation/all"

if Rails.env.production? || Rails.env.development?
  ENV["OTEL_EXPORTER_OTLP_ENDPOINT"] = Rails.application.credentials.dig(:otel_exporter_otlp_endpoint)

  OpenTelemetry::SDK.configure do |c|
    c.service_name = "skyceer-#{Rails.env}"

    # Configure Logger Provider for OpenTelemetry
    c.logger_provider = OpenTelemetry::SDK::Logs::LoggerProvider.new(
      # Add a batch log record processor to export logs via OTLP
      processor: OpenTelemetry::SDK::Logs::Export::BatchLogRecordProcessor.new(
        exporter: OpenTelemetry::Exporter::OTLP::Logs::Exporter.new(
          endpoint: Rails.application.credentials.dig(:otel_exporter_otlp_endpoint) || 'http://localhost:4318/v1/logs',
          timeout: 30
        ),
        schedule_delay: 5000,      # 5 seconds between exports
        max_queue_size: 2048,      # Larger queue
        max_export_batch_size: 512 # Smaller batches
      )
    )

    # Use all instrumentation BUT exclude Net::HTTP for OTLP endpoint
    c.use_all(
      'OpenTelemetry::Instrumentation::Net::HTTP' => {
        enabled: false, # Disable Net::HTTP instrumentation to avoid recursion
        untraced_hosts: ['grafana:4318', 'localhost:4318'] # Don't trace OTLP exports
      }
    )
  end

  # Custom logger class to forward Rails logs to OpenTelemetry
  class OpenTelemetryRailsLogger < ActiveSupport::Logger
    def initialize(*args)
      super
      @otel_logger = OpenTelemetry.logger_provider.logger(name: "skyceer-#{Rails.env}")
    end

    # Override log methods to send logs to both Rails and OpenTelemetry
    %i[debug info warn error fatal].each do |level|
      define_method(level) do |message|
        # Send to Rails logger
        super(message)

        # Send to OpenTelemetry
        otel_severity = case level
                        when :debug then OpenTelemetry::Logs::Severity::DEBUG
                        when :info then OpenTelemetry::Logs::Severity::INFO
                        when :warn then OpenTelemetry::Logs::Severity::WARN
                        when :error then OpenTelemetry::Logs::Severity::ERROR
                        when :fatal then OpenTelemetry::Logs::Severity::FATAL
                        else OpenTelemetry::Logs::Severity::INFO
                        end

        @otel_logger.on_emit(
          body: message,
          severity_number: otel_severity,
          attributes: {
            'rails.env' => Rails.env,
            'service.name' => "skyceer-#{Rails.env}"
          }
        )
      end
    end
  end

  # Replace the default Rails logger with the custom OpenTelemetry logger
  Rails.logger = OpenTelemetryRailsLogger.new(Rails.logger.instance_variable_get(:@logdev))
end