# Sidekiq.configure_server do |config|
#   config.on(:startup) do
#     schedule_file = "config/schedule.yml"
#     if File.exist?(schedule_file)
#       Sidekiq::Cron::Job.load_from_hash YAML.load_file(schedule_file)
#     end
#   end
#   config.redis = { url: ENV.fetch('REDIS_URL') { 'redis://0.0.0.0:6379' } }
# end

# Sidekiq.configure_client do |config|
#   config.redis = { url: ENV.fetch('REDIS_URL') { 'redis://0.0.0.0:6379' } }
# end

