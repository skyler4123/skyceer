require 'opentelemetry/sdk'
require 'opentelemetry/exporter/otlp'
require 'opentelemetry/instrumentation/all'
# require 'opentelemetry/instrumentation/active_support'
# require 'opentelemetry/instrumentation/rack'
# require 'opentelemetry/instrumentation/action_pack'
# require 'opentelemetry/instrumentation/active_job'
# require 'opentelemetry/instrumentation/active_record'
# require 'opentelemetry/instrumentation/action_view'
# require 'opentelemetry/instrumentation/action_mailer'
# require 'opentelemetry/instrumentation/active_storage'
# require 'opentelemetry/instrumentation/concurrent_ruby'
# require 'opentelemetry/instrumentation/net/http'
# require 'opentelemetry/instrumentation/rails'

OpenTelemetry::SDK.configure do |c|
  c.service_name = 'dice-ruby333'
  c.add_span_processor(
    OpenTelemetry::SDK::Trace::Export::BatchSpanProcessor.new(
      OpenTelemetry::Exporter::OTLP::Exporter.new(
        endpoint: 'http://monitor:4318/v1/traces',
        # Prevent instrumentation loops
        # headers: {},
        # compression: 'none'
      ),
      # Reduce batch frequency to prevent recursion
      # schedule_delay: 5000,  # 5 seconds
      # max_queue_size: 512,
      # max_export_batch_size: 64
    )
  )
  c.use_all() # enables all instrumentation!
  # c.use 'OpenTelemetry::Instrumentation::ActiveSupport'
  # c.use 'OpenTelemetry::Instrumentation::Rack'
  # c.use 'OpenTelemetry::Instrumentation::ActionPack'
  # c.use 'OpenTelemetry::Instrumentation::ActiveJob'
  # c.use 'OpenTelemetry::Instrumentation::ActiveRecord'
  # c.use 'OpenTelemetry::Instrumentation::ActionView'
  # c.use 'OpenTelemetry::Instrumentation::ActionMailer'
  # c.use 'OpenTelemetry::Instrumentation::ActiveStorage'
  # c.use 'OpenTelemetry::Instrumentation::ConcurrentRuby'
  # c.use 'OpenTelemetry::Instrumentation::Net::HTTP'
  # c.use 'OpenTelemetry::Instrumentation::Rails', {
    # Disable certain instrumentations that might cause loops
    # enable_recognize_route: false
  # }
end