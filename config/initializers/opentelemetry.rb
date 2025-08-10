# config/initializers/opentelemetry.rb
require 'opentelemetry/sdk'
require 'opentelemetry/exporter/otlp'
require 'opentelemetry/instrumentation/all'

OpenTelemetry::SDK.configure do |c|
  c.service_name = "skyceer-#{Rails.env}"

  c.add_span_processor(
    OpenTelemetry::SDK::Trace::Export::BatchSpanProcessor.new(
      OpenTelemetry::Exporter::OTLP::Exporter.new(
        endpoint: 'http://monitor:4318/v1/traces',
        timeout: 30
      ),
      # Prevent rapid-fire exports that cause recursion
      schedule_delay: 5000,      # 5 seconds between exports
      max_queue_size: 2048,      # Larger queue
      max_export_batch_size: 512 # Smaller batches
    )
  )
  
  # Use all instrumentation BUT exclude Net::HTTP for OTLP endpoint
  c.use_all({
    'OpenTelemetry::Instrumentation::Net::HTTP' => {
      enabled: false, # Disable Net::HTTP instrumentation
      # This prevents recursion when the OTLP exporter tries to send traces
      # to the same host that is being instrumented.
      # If you need to trace HTTP requests, consider using a different host or port.
      # This is a workaround to avoid recursion issues with OTLP exports.
      # You can also use a different exporter or disable tracing for specific hosts.
      # Example: if you have a monitoring service running on 'monitor:4318',
      # you can add it to untraced_hosts.
      untraced_hosts: ['monitor:4318', 'localhost:4318'] # Don't trace OTLP exports
    },
  })
end
