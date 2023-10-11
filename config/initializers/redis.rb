REDIS_HOST = ENV.fetch('PRIVATE_REDIS_HOST') { '0.0.0.0' }
REDIS_PORT = ENV.fetch('REDIS_PORT') { '6379' }
REDIS = Redis.new(url: "redis://" + REDIS_HOST + ":" + REDIS_PORT)