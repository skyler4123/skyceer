# # config/initializers/rack_attack.rb (for rails apps)
# # Provided that trusted users use an HTTP request header named APIKey
# Rack::Attack.safelist("mark any authenticated access safe") do |request|
#   # Requests are allowed if the return value is truthy
#   request.env["HTTP_APIKEY"] == "secret-string"
# end

# # Always allow requests from localhost
# # (blocklist & throttles are skipped)
# Rack::Attack.safelist('allow from localhost') do |req|
#   # Requests are allowed if the return value is truthy
#   '127.0.0.1' == req.ip || '::1' == req.ip
# end



# # config/initializers/rack_attack.rb (for rails apps)
# Rack::Attack.blocklist("block all access to admin") do |request|
#   # Requests are blocked if the return value is truthy
#   request.path.start_with?("/admin")
# end

# Rack::Attack.blocklist('block bad UA logins') do |req|
#   req.path == '/login' && req.post? && req.user_agent == 'BadUA'
# end



# # Block suspicious requests for '/etc/password' or wordpress specific paths.
# # After 3 blocked requests in 10 minutes, block all requests from that IP for 5 minutes.
# Rack::Attack.blocklist('fail2ban pentesters') do |req|
#   # `filter` returns truthy value if request fails, or if it's from a previously banned IP
#   # so the request is blocked
#   Rack::Attack::Fail2Ban.filter("pentesters-#{req.ip}", maxretry: 3, findtime: 10.minutes, bantime: 5.minutes) do
#     # The count for the IP is incremented if the return value is truthy
#     CGI.unescape(req.query_string) =~ %r{/etc/passwd} ||
#     req.path.include?('/etc/passwd') ||
#     req.path.include?('wp-admin') ||
#     req.path.include?('wp-login')
#   end
# end



# # Lockout IP addresses that are hammering your login page.
# # After 20 requests in 1 minute, block all requests from that IP for 1 hour.
# Rack::Attack.blocklist('allow2ban login scrapers') do |req|
#   # `filter` returns false value if request is to your login page (but still
#   # increments the count) so request below the limit are not blocked until
#   # they hit the limit.  At that point, filter will return true and block.
#   Rack::Attack::Allow2Ban.filter(req.ip, maxretry: 20, findtime: 1.minute, bantime: 1.hour) do
#     # The count for the IP is incremented if the return value is truthy.
#     req.path == '/login' and req.post?
#   end
# end



# Throttle login attempts for a given email parameter to 6 reqs/minute
# Throttle high volumes of requests by IP address
Rack::Attack.throttle('req/ip', limit: 20, period: 20.seconds) do |req|
  req.ip unless req.path.starts_with?('/assets')
end
# Throttle login attempts by IP address
Rack::Attack.throttle('logins/ip', limit: 5, period: 20.seconds) do |req|
  if req.path == '/admins/sign_in' && req.post?
    req.ip
  elsif req.path == '/users/sign_in' && req.post?
    req.ip
  end
end

# Throttle login attempts by email address
Rack::Attack.throttle("logins/email", limit: 5, period: 20.seconds) do |req|
  if req.path == '/admins/sign_in' && req.post?
    req.params['email'].presence
  elsif req.path == '/users/sign_in' && req.post?
    req.params['email'].presence
  end
end
# # Return the *normalized* email as a discriminator on POST /login requests
# Rack::Attack.throttle('limit logins per email', limit: 6, period: 60) do |req|
#   if req.path == '/login' && req.post?
#     # Normalize the email, using the same logic as your authentication process, to
#     # protect against rate limit bypasses.
#     req.params['email'].to_s.downcase.gsub(/\s+/, "")
#   end
# end

# # You can also set a limit and period using a proc. For instance, after
# # Rack::Auth::Basic has authenticated the user:
# limit_proc = proc { |req| req.env["REMOTE_USER"] == "admin" ? 100 : 1 }
# period_proc = proc { |req| req.env["REMOTE_USER"] == "admin" ? 1 : 60 }
# Rack::Attack.throttle('request per ip', limit: limit_proc, period: period_proc) do |request|
#   request.ip
# end



# # Track requests from a special user agent.
# Rack::Attack.track("special_agent") do |req|
#   req.user_agent == "SpecialAgent"
# end
# # Supports optional limit and period, triggers the notification only when the limit is reached.
# Rack::Attack.track("special_agent", limit: 6, period: 60) do |req|
#   req.user_agent == "SpecialAgent"
# end
# # Track it using ActiveSupport::Notification
# ActiveSupport::Notifications.subscribe("track.rack_attack") do |name, start, finish, instrumenter_id, payload|
#   req = payload[:request]
#   if req.env['rack.attack.matched'] == "special_agent"
#     Rails.logger.info "special_agent: #{req.path}"
#     STATSD.increment("special_agent")
#   end
# end